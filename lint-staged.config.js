export default  {
  '*.{js,jsx,ts,tsx}': () => 'pnpm lint:fix',
  '**/*.ts?(x)': () => 'pnpm check-types',
}
