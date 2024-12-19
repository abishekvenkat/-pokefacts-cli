#!/usr/bin/env node
import fetch from 'node-fetch';
import { helpText } from './help.js';

async function getPokemonFact(options = {}) {
  try {
    const params = new URLSearchParams();
    
    if (options.count) params.append('count', options.count);
    if (options.id) params.append('id', options.id);
    if (options.gen) params.append('gen', options.gen);
    
    const url = `https://pokefacts.vercel.app${params.toString() ? `?${params.toString()}` : ''}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch Pokemon fact:', error.message);
  }
}

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(helpText);
  process.exit(0);
}

const options = {};
for (let i = 0; i < args.length; i += 2) {
  const flag = args[i].replace('--', '');
  const value = args[i + 1];
  
  if (['count', 'id', 'gen'].includes(flag) && value) {
    options[flag] = parseInt(value, 10);
  }
}

getPokemonFact(options);