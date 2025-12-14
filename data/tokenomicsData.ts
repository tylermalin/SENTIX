// Tokenomics Data Constants

export const SUPPLY_DATA = {
  totalSupply: 10_000_000_000, // 10 billion
  currentSupply: 2_500_000_000, // 2.5 billion (at TGE)
  burned: 150_000_000, // 150 million burned
  staked: 800_000_000, // 800 million staked
}

export const ALLOCATION_DATA = [
  {
    name: 'Ecosystem',
    value: 40,
    amount: 4_000_000_000,
    color: '#00F0FF', // Electric Cyan
    description: 'Community rewards, grants, and protocol development',
  },
  {
    name: 'Foundation',
    value: 20,
    amount: 2_000_000_000,
    color: '#475569', // Slate-700
    description: 'Long-term protocol sustainability and governance',
  },
  {
    name: 'Core Contributors',
    value: 15,
    amount: 1_500_000_000,
    color: '#64748B', // Slate-500
    description: 'Team allocation with 48-month vesting schedule',
  },
  {
    name: 'Private Partners',
    value: 15,
    amount: 1_500_000_000,
    color: '#475569', // Slate-600
    description: 'Strategic investors with 12-month cliff',
  },
  {
    name: 'Public Float',
    value: 10,
    amount: 1_000_000_000,
    color: '#FFFFFF', // White
    description: 'Initial public distribution at TGE',
  },
]

export const VESTING_SCHEDULE = [
  { month: 0, circulating: 2_500_000_000, label: 'TGE' },
  { month: 3, circulating: 2_650_000_000 },
  { month: 6, circulating: 2_850_000_000 },
  { month: 9, circulating: 3_100_000_000 },
  { month: 12, circulating: 3_500_000_000, label: 'Cliff End' },
  { month: 18, circulating: 4_200_000_000 },
  { month: 24, circulating: 5_000_000_000 },
  { month: 30, circulating: 5_900_000_000 },
  { month: 36, circulating: 6_800_000_000 },
  { month: 42, circulating: 7_700_000_000 },
  { month: 48, circulating: 8_600_000_000, label: 'Full Vest' },
  { month: 54, circulating: 9_400_000_000 },
  { month: 60, circulating: 10_000_000_000 },
]

export const METRICS = {
  burnRate: 0.15, // 15% of fees burned
  stakingAPY: 8.5, // 8.5% APY
  avgDailyBurn: 2_500_000, // 2.5M tokens/day
  totalStaked: 800_000_000, // 800M staked
}

export const FLYWHEEL_STEPS = [
  {
    id: 1,
    title: 'Agents Join',
    description: 'AI agents deploy on Sentix Network seeking liquidity and services',
    icon: 'network',
  },
  {
    id: 2,
    title: 'Competition Rises',
    description: 'Multiple agents compete for the same resources, driving efficiency',
    icon: 'trending-up',
  },
  {
    id: 3,
    title: 'Staking (Myelination) Spikes',
    description: 'Agents stake $SNTX to gain priority bandwidth and faster execution',
    icon: 'shield',
  },
  {
    id: 4,
    title: 'Volume Burns Supply',
    description: 'Every transaction burns tokens, creating deflationary pressure',
    icon: 'flame',
  },
  {
    id: 5,
    title: 'Scarcity Increases',
    description: 'Reduced supply increases token value, attracting more agents',
    icon: 'arrow-up',
  },
]

