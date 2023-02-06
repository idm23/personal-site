// TODO Add a couple lines about each project
const data = [
  {
    title: 'Multi-Scale, Super-Resolution Remote Imaging via Deep Conditional Normalizing Flows',
    subtitle: '',
    link: 'https://arc.aiaa.org/doi/10.2514/6.2022-2499',
    image: '/images/projects/NF_Sample.png',
    date: '2021-12-29',
    desc:
      'Lunar super-resolution via normalizing flows '
      + 'to improve feature detection while maintaining '
      + 'uncertainty quantification. Leverages conditional '
      + 'blocks to enable a continuous scale factor.',
  },
  {
    title: 'Online Shape Modeling of Resident Space Objects Through Implicit Scene Understanding',
    subtitle: '',
    link: 'https://arc.aiaa.org/doi/10.2514/1.I011014',
    image: '/images/projects/GQN_Sample.png',
    date: '2021-11-27',
    desc:
      'End-to-end pipeline for resident space object '
      + 'shape modeling. Specifically responsible for the '
      + 'generative query network used for implicit scene understanding.',
  },
  {
    title: 'Medical Image Landmark Localization',
    subtitle: '',
    link: 'https://www.ece.cornell.edu/spotlights/2022-meng-poster-session-winners',
    image: '/images/projects/Med_Sample.png',
    date: '2022-05-11',
    desc:
      'Evaluated three different methods of identifying common medical '
      + 'landmarks in chest CT scans. Personally responsible for encoder network '
      + 'using elastic graph deformation to register landmarks similarly to '
      + 'how facial recognition is commonly acheived.',
  },
  {
    title: 'Automated Portfolio Optimization',
    subtitle: '',
    image: '/images/projects/Stockbot_Sample.png',
    date: '2023-01-25',
    desc:
      'Implemented a cuda-enabled gym-like environment and proximal policy optimization '
      + 'variant to balance a portfolio given only three years of historical data. '
      + 'Currently working towards multi-task and continual learning approach '
      + 'to generalize current results.',
  },
];

export default data;
