 matches-cli create_or_update_oracle \
          -k id.json \
          --env mainnet-beta \
          -cp ${1}/1.json
matches-cli update_match_from_oracle \
          -k id.json \
          --env mainnet-beta \
          -cp ${1}/1.json

for filename in ${1}/*.json
do 
       matches-cli create_or_update_oracle \
          -k id.json \
          -env mainnet-beta -cp ${filename}
         matches-cli disburse_tokens_by_oracle \
          -k id.json \
          -env mainnet-beta   -cp ${filename} 
done 
 matches-cli drain_match   -k id.json  -env mainnet-beta -cp ${1}/1.json
         matches-cli drain_oracle           -k id.json -env mainnet-beta   -cp ${1}/1.json


