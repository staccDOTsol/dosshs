
 matches-cli create_match \
          -k id.json \
          --env mainnet-beta \
          -cp ${1}

matches-cli create_or_update_oracle \
          -k id.json \
          --env mainnet-beta \
          -cp ${1}
matches-cli update_match \
          -k id.json \
          --env mainnet-beta \
          -cp ${2}

matches-cli update_match \
          -k id.json \
          --env mainnet-beta \
          -cp ${2}

matches-cli create_or_update_oracle \
          -k id.json \
          --env mainnet-beta \
          -cp ${2}