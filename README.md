# Monopoly

## Description

This was an experiment I did to simulate several games of monopoly and statistically analyze the results.
A web view is available via the /web/ directory.

## Installation

First, install (deno)[https://deno.land/]

Then, clone the repository and navigate to the directory.

```bash
git clone gooseterv/monopoly
cd monopoly
``` 
Next, run either the dice program or the main program with deno.

```bash 
deno task main
```
```bash
deno task dice
```

## Usage 
See the end of `main.js` for instructions on the iterations and loop configuring.
Same with `dice.js` for the dice program.

To open the web view, start a web server on **`PORT 5500`** in the main `/monopoly` directory and navigate to `localhost:5500/web/chart.html`. (or `/chartDice.html`)

