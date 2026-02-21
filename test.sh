#!/bin/bash

EXPECTED="Hello, SiRRi!"

output=$(node --input-type=module -e "
  import hello from './server.js';
  console.log(hello('SiRRi'));
")

if [ "$output" = "$EXPECTED" ]; then
    echo '✅ Test passed'
else
    echo '❌ Test failed'
    echo "Expected: $EXPECTED"
    echo "Got: $output"
fi