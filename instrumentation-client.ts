import posthog from 'posthog-js'

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2026-05-30',
  })

  const ORG_LOOKUP_KEY = 'mk_org_lookup_done'

  if (!sessionStorage.getItem(ORG_LOOKUP_KEY)) {
    fetch('https://ipinfo.io/json')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.org) {
          posthog.setPersonProperties({
            visitor_org: data.org,
            visitor_city: data.city,
            visitor_region: data.region,
            visitor_country: data.country,
          })
          posthog.capture('visitor_identified', {
            org: data.org,
            city: data.city,
            region: data.region,
            country: data.country,
          })
        }
        sessionStorage.setItem(ORG_LOOKUP_KEY, '1')
      })
      .catch(() => {
        // Best-effort enrichment; silently ignore failures (rate limits, network, etc.)
      })
  }
}
