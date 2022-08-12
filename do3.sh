
 matches-cli leave_match -k hydraintermediary -env mainnet-beta -cp ${1}
 matches-cli drain_match   -k id  -env mainnet-beta -cp ${1}
         matches-cli drain_oracle           -k id -env mainnet-beta   -cp ${1}

