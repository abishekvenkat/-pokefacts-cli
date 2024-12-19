export const helpText = `
Usage: pokefacts [options]

Options:
  --help          Show this help message
  --count <n>     Number of random facts to retrieve (default: 1)
  --id <n>        Get a specific fact by ID
  --gen <n>       Get facts about Pokemon from generation n (1-3)

Examples:
  pokefacts                 Get a random fact
  pokefacts --count 3      Get 3 random facts
  pokefacts --gen 1        Get facts about Gen 1 Pokemon
  pokefacts --id 5         Get fact with ID 5
`;