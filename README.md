# pokefacts-cli

A command-line interface for getting random Pokémon facts. This CLI tool uses the [PokemonFactsAPI](https://pokefacts.vercel.app) to fetch interesting facts about Pokémon.

## Installation

```bash
npm install -g pokefacts-cli
```

## Usage

```bash
pokefacts [options]
```

### Options

- `--help`: Show help message
- `--count <n>`: Number of random facts to retrieve (default: 1)
- `--id <n>`: Get a specific fact by ID
- `--gen <n>`: Get facts about Pokémon from generation n (1-3)

### Examples

```bash
# Get a random fact
pokefacts

# Get 3 random facts
pokefacts --count 3

# Get facts about Gen 1 Pokémon
pokefacts --gen 1

# Get fact with ID 5
pokefacts --id 5
```

## API

This CLI tool uses the [PokemonFactsAPI](https://pokefacts.vercel.app) endpoint. For more information about the API, visit the [original project repository](https://github.com/abishekvenkat/pokemonfactsapi).
