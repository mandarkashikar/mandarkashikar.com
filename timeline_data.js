const timelineData = [
    {
        id: 'item-2025-1',
        year: '2025',
        content: 'Released <span class="highlight-link">Elavon’s first SMB eCommerce product</span> in partnership with <a href="https://smb.elavon.com/offers/?vertical=eCommerce" target="_blank">Wix</a>.',
        title: 'Elavon SMB eCommerce',
        desc: 'Released Elavon’s first SMB eCommerce product in partnership with Wix.',
        image: '',
        link: 'https://smb.elavon.com/offers/?vertical=eCommerce'
    },
    {
        id: 'item-2022-1',
        year: '2022',
        content: 'Joined <span class="highlight-link">Elavon (U.S. Bank)</span> as Senior Product Manager for Retail SMB Commerce.',
        title: 'Elavon (U.S. Bank)',
        desc: 'Joined Elavon (U.S. Bank) as Senior Product Manager for Retail SMB Commerce.',
        image: ''
    },
    {
        id: 'item-2021-3',
        year: '2021',
        content: 'Joined <span class="highlight-link">Talech (U.S. Bank)</span> as Senior Product Manager focused on the web platform.',
        title: 'Talech (U.S. Bank)',
        desc: 'Joined Talech (U.S. Bank) as Senior Product Manager focused on the web platform; launched features such as gift cards, online commerce tools, and the DeLorean merchant portal.',
        image: ''
    },
    {
        id: 'item-2021-2',
        year: '2021',
        content: 'Promoted to <span class="highlight-link">Senior Product Manager</span> at TriNet.',
        title: 'Senior PM Promotion',
        desc: 'Promoted to Senior Product Manager at TriNet.',
        image: ''
    },
    {
        id: 'item-2021-1',
        year: '2021',
        content: 'Joined <span class="highlight-link">TriNet</span> as a Product Manager.',
        title: 'TriNet',
        desc: 'Joined TriNet as a Product Manager.',
        image: ''
    },
    {
        id: 'item-2020-1',
        year: '2020',
        content: 'Moved into <span class="highlight-link">EY-Parthenon</span>, continuing strategy and analytics work.',
        title: 'EY-Parthenon',
        desc: 'Moved into EY-Parthenon, continuing strategy and analytics work for Fortune 500 clients.',
        image: ''
    },
    {
        id: 'item-2019-2',
        year: '2019',
        content: 'Joined <span class="highlight-link">EY</span> as a Senior Consultant in Strategy & Analytics.',
        title: 'EY Senior Consultant',
        desc: 'Joined EY as a Senior Consultant in Strategy & Analytics; worked with clients including LabCorp and the Bill & Melinda Gates Foundation.',
        image: ''
    },
    {
        id: 'item-2019-1',
        year: '2019',
        content: 'Received the <span class="highlight-link">Smith School Brand Ambassador Award</span>.',
        title: 'Award Recipient',
        desc: 'Received the Smith School Brand Ambassador Award.',
        image: ''
    },
    {
        id: 'item-2018-4',
        year: '2018',
        content: 'Organized the first Smith alumni meet-up in <span class="highlight-link">Silicon Valley</span>.',
        title: 'Alumni Meet-up',
        desc: 'Organized the first Smith alumni meet-up in Silicon Valley.',
        image: ''
    },
    {
        id: 'item-2018-3',
        year: '2018',
        content: 'Organized the first-ever <span class="highlight-link">Smith in the Valley</span> immersion trip.',
        title: 'Silicon Valley Immersion',
        desc: 'Organized the first-ever Smith in the Valley Silicon Valley immersion trip for MBA students.',
        image: ''
    },
    {
        id: 'item-2018-2',
        year: '2018',
        content: 'Added a second degree — <span class="highlight-link">MS in Marketing Analytics</span> — alongside the MBA.',
        title: 'MS Marketing Analytics',
        desc: 'Added a second degree — MS in Marketing Analytics — alongside the MBA.',
        image: ''
    },
    {
        id: 'item-2018-1',
        year: '2018',
        content: 'Interned at <span class="highlight-link">MPOWER Financing</span>, launching the company’s first referral program.',
        title: 'MPOWER Financing',
        desc: 'Interned at MPOWER Financing, launching the company’s first referral program.',
        image: ''
    },
    {
        id: 'item-2017-3',
        year: '2017',
        content: 'Worked as a Graduate Assistant at the <span class="highlight-link">Dingman Center for Entrepreneurship</span>.',
        title: 'Dingman Center',
        desc: 'Worked as a Graduate Assistant at the Dingman Center for Entrepreneurship, serving as a marketing associate for their podcast.',
        image: ''
    },
    {
        id: 'item-2017-2',
        year: '2017',
        content: 'Selected as a <span class="highlight-link">Brand Ambassador</span> for the Smith MBA program.',
        title: 'Brand Ambassador',
        desc: 'Selected as a Brand Ambassador for the Smith MBA program.',
        image: ''
    },
    {
        id: 'item-2017-1',
        year: '2017',
        content: 'Started <span class="highlight-link">MBA</span> at the University of Maryland, Smith School of Business.',
        title: 'MBA at UMD',
        desc: 'Started MBA at the University of Maryland, Smith School of Business.',
        image: ''
    },
    {
        id: 'item-2016-3',
        year: '2016',
        content: 'Joined <span class="highlight-link">BAU Institute</span> of Engineering Entrepreneurship & Leadership.',
        title: 'BAU Institute',
        desc: 'Joined BAU Institute of Engineering Entrepreneurship & Leadership; helped build the accelerator program from the ground up.',
        image: ''
    },
    {
        id: 'item-2016-2',
        year: '2016',
        content: 'Completed an Introduction to <span class="highlight-link">Python</span> course.',
        title: 'Python Course',
        desc: 'Completed an Introduction to Python course.',
        image: ''
    },
    {
        id: 'item-2016-1',
        year: '2016',
        content: 'Continued part-time at <span class="highlight-link">Bums on the Saddle</span>.',
        title: 'Bums on the Saddle',
        desc: 'Continued part-time at Bums on the Saddle until March 2016.',
        image: ''
    },
    {
        id: 'item-2015-1',
        year: '2015',
        content: 'Began part-time work with <span class="highlight-link">Bums on the Saddle</span>.',
        title: 'Bums on the Saddle',
        desc: 'Began part-time work with Bums on the Saddle, contributing to operations and customer experience.',
        image: ''
    },
    {
        id: 'item-2012-2',
        year: '2012',
        content: 'Joined <span class="highlight-link">Philips Healthcare</span> as Assistant Manager in New Product Development.',
        title: 'Philips Healthcare',
        desc: 'Joined Philips Healthcare as Assistant Manager in New Product Development; helped bring Philips’ first Cath Lab to India as part of a core team of five.',
        image: ''
    },
    {
        id: 'item-2012-1',
        year: '2012',
        content: 'Graduated from <span class="highlight-link">College of Engineering Pune</span> with a B.Tech.',
        title: 'Engineering Graduation',
        desc: 'Graduated from College of Engineering Pune with a B.Tech in Industrial Engineering.',
        image: ''
    },
    {
        id: 'item-2010-1',
        year: '2010',
        content: 'Interned at <span class="highlight-link">Tata Motors</span> (Small Car Division).',
        title: 'Tata Motors',
        desc: 'Interned at Tata Motors (Small Car Division), gaining early exposure to automotive engineering and manufacturing.',
        image: ''
    },
    {
        id: 'item-2010-2',
        year: '2010',
        content: 'Volunteered at <span class="highlight-link">Tata Motors</span> (Small Car Division).',
        title: 'Tata Motors',
        desc: 'hellp at Tata Motors (Small Car Division), gaining early exposure to automotive engineering and manufacturing.',
        image: ''
    }
];
