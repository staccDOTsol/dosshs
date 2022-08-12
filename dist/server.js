var fs = require('fs') // yarn add express cors body-parser 
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const { exec } = require('child_process');
const json = require('body-parser/lib/types/json');

var winning = {"winning":"", "lastplay": 0, "nextthousand":0, "nextseed":""}
var seeds = JSON.parse(fs.readFileSync("./seeds.json").toString())
var app = express()
let configs = []
app.use(cors())
setInterval(async function(){
    try {
    fs.writeFileSync('./winning.json', JSON.stringify(winning))
    fs.writeFileSync('./seeds.json', JSON.stringify(seeds))
    } 
    catch (err){

    }
}, 1000 * 1000)
let counter = 0;
var jsonParser = bodyParser.json()
var nextseed  
let nextthousand = (Math.ceil(new Date().getTime() / 1000 / 1000)) 
try {
fs.mkdirSync(nextthousand.toString())
} catch (err){}try {
  fs.mkdirSync((nextthousand + 1).toString())
  } catch (err){}
let first = true
console.log(nextthousand)
var ls = exec('solana-keygen new --no-bip39-passphrase --force   -o' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {

  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
  console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);

var ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
  console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
var ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {

  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
    nextseed = stdout
    winning = {winning: winning.winning, "lastplay": Math.ceil(new Date().getTime() / 1000), nextseed, nextthousand, s: Math.ceil(new Date().getTime() / 1000 / 1000)}
    console.log(stdout)
    console.log(stdout)
    console.log(stdout)
    console.log(stdout)

  console.log('Child Process STDERR: ' + stderr);
try {
var ls = exec("echo '" + JSON.stringify({
"winOracle": null,
"matchState": { "initialized": true },
"winOracleCooldown": 0,
"space": 300,
"minimumAllowedEntryTime": null,
"tokenEntryValidation": null,
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"leaveAllowed": true,
"joinAllowedDuringStart": true,
"oracleState": {
"seed": nextseed.replace('\n',''),
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"finalized": false,
"tokenTransferRoot": null,
"tokenTransfers": [ ]
},
"tokensToJoin": [
{
"mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
"amount": 13800,
"sourceType": 1,
"index": 0,
"validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
}
]
}) + "' >> " +  (nextthousand).toString() + 'm.json', function (error, stdout, stderr) {

if (error) {
console.log(error.stack);
console.log('Error code: ' + error.code);
console.log('Signal received: ' + error.signal);
}
console.log('Child Process STDOUT: ' + stdout);
console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
console.log('Child process exited with exit code ' + code);

var ls = exec("echo '" + JSON.stringify({
"winOracle": null,
"matchState": { "started": true },
"winOracleCooldown": 0,
"space": 300,
"minimumAllowedEntryTime": null,
"tokenEntryValidation": null,
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"leaveAllowed": true,
"joinAllowedDuringStart": true,
"oracleState": {
"seed": nextseed.replace('\n',''),
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"finalized": false,
"tokenTransferRoot": null,
"tokenTransfers": [ ]
},
"tokensToJoin": [
{
  "mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
  "amount": 13800,
  "sourceType": 1,
  "index": 0,
  "validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
}
]
}) + "' >> " +  (nextthousand).toString() + 'ma.json', function (error, stdout, stderr) {

if (error) {
console.log(error.stack);
console.log('Error code: ' + error.code);
console.log('Signal received: ' + error.signal);
}
console.log('Child Process STDOUT: ' + stdout);
console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
console.log('Child process exited with exit code ' + code);
try {
var ls = exec('sh do2.sh ' + (nextthousand).toString() + 'm.json ' + (nextthousand).toString() +'ma.json' , function (error, stdout, stderr) {
if (error) {
console.log(error.stack);
console.log('Error code: ' + error.code);
console.log('Signal received: ' + error.signal);
}
console.log('Child Process STDOUT: ' + stdout);
console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
console.log('Child process exited with exit code ' + code);

maybe = (Math.floor(new Date().getTime() / 1000 / 60)) 
nextthousand = maybe + 1
}); }
catch (err){

}
})
})} catch (err){}})})})

setInterval(async function(){
    try {
    maybe = (Math.ceil(new Date().getTime() / 1000 / 1000)) 
    if (maybe > nextthousand ){

        counter = 0
       
   for (var config of configs){
    let haha = Math.random() 
    if (haha < 0.1){ // 10% hydra
      config.oracleState.tokenTransfers[0].to = "4DevNqTkqssc177AhRjKJV2692VhGhb137U38camFUq9"
    } else  if (haha < 0.2){ //10% 2
      config.oracleState.tokenTransfers[0].to = configs[configs.length-4].oracleState.tokenTransfers[0].from
    }
    else if  (haha < 0.3){//10% 3
      config.oracleState.tokenTransfers[0].to = configs[configs.length-3].oracleState.tokenTransfers[0].from
    }
    else if  (haha < 0.5){//20% 3
      config.oracleState.tokenTransfers[0].to = configs[configs.length-2].oracleState.tokenTransfers[0].from    
    }
    else { // 50% 1st
      config.oracleState.tokenTransfers[0].to = configs[configs.length-1].oracleState.tokenTransfers[0].from  

    }
console.log(counter)
   if (counter == 0){
    fs.writeFileSync(nextthousand.toString()  + '/' + counter.toString() + '.json', JSON.stringify(config))

  
   try {
   var ls = exec('sh do.sh ' + (nextthousand ).toString() + '/' + '0.json'  , function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
      }
      console.log('Child Process STDOUT: ' + stdout);
      console.log('Child Process STDERR: ' + stderr);
    });
    
    ls.on('exit', function (code) {
     console.log('Child process exited with exit code ' + code);
    
    })
  
  
  
       
  }
   catch (err){} }
   var ls = exec('sh do.sh ' + (nextthousand ).toString() + '/' + '0.json'  , function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
   console.log('Child process exited with exit code ' + code);
   var ls = exec('matches-cli create_or_update_oracle -k id.json -env mainnet-beta -cp ' + (nextthousand ).toString() + '/' + counter.toString() + '.json'  , function (error, stdout, stderr) {
  
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
   console.log('Child process exited with exit code ' + code);
   var ls = exec('matches-cli disburse_tokens_by_oracle -k id.json -env mainnet-beta -cp ' + (nextthousand ).toString() + '/' + counter.toString() + '.json'  , function (error, stdout, stderr) {
  
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
   console.log('Child process exited with exit code ' + code);
  })
  })
  })
 
   counter++

   }
   configs[0].oracleState.finalized = true

   fs.writeFileSync(nextthousand.toString()  + '/blurp.json', JSON.stringify(configs[0]))

   var ls = exec('matches-cli create_or_update_oracle -k id.json -env mainnet-beta -cp ' + (nextthousand ).toString() + '/blurp.json'  , function (error, stdout, stderr) {
  
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  ls.on('exit', function (code) {
   console.log('Child process exited with exit code ' + code);
   var ls = exec('matches-cli update_match_from_oracle -k id.json -env mainnet-beta -cp ' + (nextthousand ).toString() + '/blurp.json'  , function (error, stdout, stderr) {
  
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  ls.on('exit', function (code) {
   console.log('Child process exited with exit code ' + code);
  })
  })
  
   configs = []
   nextthousand = nextthousand + 1 
     var ls = exec('solana-keygen new --no-bip39-passphrase --force   -o' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {

            if (error) {
              console.log(error.stack);
              console.log('Error code: ' + error.code);
              console.log('Signal received: ' + error.signal);
            }
            console.log('Child Process STDOUT: ' + stdout);
            console.log('Child Process STDERR: ' + stderr);
          });
          
          ls.on('exit', function (code) {
            console.log('Child process exited with exit code ' + code);
       
          var ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {
            if (error) {
              console.log(error.stack);
              console.log('Error code: ' + error.code);
              console.log('Signal received: ' + error.signal);
            }
            console.log('Child Process STDOUT: ' + stdout);
            console.log('Child Process STDERR: ' + stderr);
          });
          
          ls.on('exit', function (code) {
            console.log('Child process exited with exit code ' + code);
          var ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {
          
            if (error) {
              console.log(error.stack);
              console.log('Error code: ' + error.code);
              console.log('Signal received: ' + error.signal);
            }
            console.log('Child Process STDOUT: ' + stdout);
              nextseed = stdout
              winning = {winning: winning.winning, "lastplay": Math.ceil(new Date().getTime() / 1000), nextseed, nextthousand, s: Math.ceil(new Date().getTime() / 1000 / 1000)}
              console.log(stdout)
              console.log(stdout)
              console.log(stdout)
              console.log(stdout)

            console.log('Child Process STDERR: ' + stderr);
         try {
var ls = exec("echo '" + JSON.stringify({
    "winOracle": null,
    "matchState": { "initialized": true },
    "winOracleCooldown": 0,
    "space": 300,
    "minimumAllowedEntryTime": null,
    "tokenEntryValidation": null,
    "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
    "leaveAllowed": true,
    "joinAllowedDuringStart": true,
    "oracleState": {
      "seed": nextseed.replace('\n',''),
      "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
      "finalized": false,
      "tokenTransferRoot": null,
      "tokenTransfers": [ ]
    },
    "tokensToJoin": [
      {
        "mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
        "amount": 13800,
        "sourceType": 1,
        "index": 0,
        "validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
      }
    ]
  }) + "' >> " +  (nextthousand).toString() + 'm.json', function (error, stdout, stderr) {

    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);

    var ls = exec("echo '" + JSON.stringify({
        "winOracle": null,
        "matchState": { "started": true },
        "winOracleCooldown": 0,
        "space": 300,
        "minimumAllowedEntryTime": null,
        "tokenEntryValidation": null,
        "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
        "leaveAllowed": true,
        "joinAllowedDuringStart": true,
        "oracleState": {
          "seed": nextseed.replace('\n',''),
          "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
          "finalized": false,
          "tokenTransferRoot": null,
          "tokenTransfers": [ ]
        },
        "tokensToJoin": [
          {
            "mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
            "amount": 13800,
            "sourceType": 1,
            "index": 0,
            "validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
          }
        ]
      }) + "' >> " +  (nextthousand).toString() + 'ma.json', function (error, stdout, stderr) {
    
        if (error) {
          console.log(error.stack);
          console.log('Error code: ' + error.code);
          console.log('Signal received: ' + error.signal);
        }
        console.log('Child Process STDOUT: ' + stdout);
        console.log('Child Process STDERR: ' + stderr);
      });
      
      ls.on('exit', function (code) {
        console.log('Child process exited with exit code ' + code);
    try {
  var ls = exec('sh do2.sh ' + (nextthousand).toString() + 'm.json ' + (nextthousand).toString() +'ma.json' , function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);
    nextthousand = nextthousand + 1 
  }); }
   catch (err){

   }
});   });   } catch (err){}}); });
          
ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
})          });

    }    
    winning = {"winning": winning.winning, "lastplay": winning.lastplay, nextseed, nextthousand, s: Math.ceil(new Date().getTime() / 1000 / 1000) }

} catch (err){
    console.log(err)
}

}, 1000 * 1000)
app.use(express.json())
app.get(
  '/stuff',
  async function
  (req, res) { 
    //console.log(winning)
res.send(winning)
  })
app.post(
  '/join',jsonParser,
  async function
  (req, res) { 
    try {
    let config = (req.body) 
    winning = {"winning": config.oracleState.tokenTransfers[0].from, "lastplay": Math.ceil(new Date().getTime() / 1000), nextseed, nextthousand, s: Math.ceil(new Date().getTime() / 1000 / 1000) }//
   // config.oracleState.finalized = true
  configs.push(config)
  console.log(configs.length )

}
catch (err){
    console.log(err)
}
  }
)


console.log(nextthousand)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
