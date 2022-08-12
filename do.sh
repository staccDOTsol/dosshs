 matches-cli create_or_update_oracle \
          -k id \
          --env mainnet-beta \
          -cp ${1}
matches-cli update_match_from_oracle \
          -k id \
          --env mainnet-beta \
          -cp ${1}


