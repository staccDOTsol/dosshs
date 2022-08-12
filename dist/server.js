var fs = require("fs"); // yarn add express cors body-parser
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const { exec } = require("child_process");
const json = require("body-parser/lib/types/json");
const e = require("express");
const PromisePool = require("@supercharge/promise-pool").default;
function ablarg(who) {
  setTimeout(async function () {
    discos[who] = 0;
  }, 10 * 1000);
}
var winning = { winning: "", lastplay: 0, nextthousand: 0, nextseed: "" };
var seeds = [];
var app = express();
let configs = [];
app.use(cors());

let counter = 0;
var jsonParser = bodyParser.json();
var nextseed;
var count123 = 0;
let nextthousand = Math.ceil(new Date().getTime() / 1000 / 1000);
try {
  fs.mkdirSync(count123.toString());
} catch (err) {}
let first = true;
console.log(count123);
var ls = exec(
  "solana-keygen new --no-bip39-passphrase --force   -o" +
    count123.toString() +
    ".json",
  function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log("Error code: " + error.code);
      console.log("Signal received: " + error.signal);
    }
    console.log("Child Process STDOUT: " + stdout);
    console.log("Child Process STDERR: " + stderr);
  }
);

ls.on("exit", function (code) {
  console.log("Child process exited with exit code " + code);

  var ls = exec(
    "solana address -k " + count123.toString() + ".json",
    function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log("Error code: " + error.code);
        console.log("Signal received: " + error.signal);
      }
      console.log("Child Process STDOUT: " + stdout);
      console.log("Child Process STDERR: " + stderr);
    }
  );

  ls.on("exit", function (code) {
    console.log("Child process exited with exit code " + code);
    var ls = exec(
      "solana address -k " + count123.toString() + ".json",
      function (error, stdout, stderr) {
        if (error) {
          console.log(error.stack);
          console.log("Error code: " + error.code);
          console.log("Signal received: " + error.signal);
        }
        console.log("Child Process STDOUT: " + stdout);
        nextseed = stdout;
        seeds.push(nextseed);
        winning = {
          winning: winning.winning,
          lastplay: Math.ceil(new Date().getTime() / 1000),
          nextseed,
          seeds,
          nextthousand: Math.ceil(new Date().getTime() / 1000 / 1000),
          s: new Date().getTime(),
        };
        console.log(stdout);
        console.log(stdout);
        console.log(stdout);
        console.log(stdout);

        console.log("Child Process STDERR: " + stderr);
        try {
          var ls = exec(
            " echo '" +
              JSON.stringify({
                winOracle: null,
                matchState: { initialized: true },
                winOracleCooldown: 0,
                space: 300,
                minimumAllowedEntryTime: null,
                tokenEntryValidation: null,
                authority: "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                leaveAllowed: true,
                joinAllowedDuringStart: true,
                oracleState: {
                  seed: nextseed.replace("\n", ""),
                  authority: "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                  finalized: false,
                  tokenTransferRoot: null,
                  tokenTransfers: [],
                },
                tokensToJoin: [
                  {
                    mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                    amount: 138000,
                    sourceType: 1,
                    index: 0,
                    validationProgram:
                      "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV",
                  },
                ],
              }) +
              "' >> m2" +
              count123.toString() +
              ".json",
            function (error, stdout, stderr) {
              if (error) {
                console.log(error.stack);
                console.log("Error code: " + error.code);
                console.log("Signal received: " + error.signal);
              }
              console.log("Child Process STDOUT: " + stdout);
              console.log("Child Process STDERR: " + stderr);
            }
          );

          ls.on("exit", function (code) {
            console.log("Child process exited with exit code " + code);

            var ls = exec(
              "echo '" +
                JSON.stringify({
                  winOracle: null,
                  matchState: { started: true },
                  winOracleCooldown: 0,
                  space: 300,
                  minimumAllowedEntryTime: null,
                  tokenEntryValidation: null,
                  authority: "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                  leaveAllowed: true,
                  joinAllowedDuringStart: true,
                  oracleState: {
                    seed: nextseed.replace("\n", ""),
                    authority: "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                    finalized: false,
                    tokenTransferRoot: null,
                    tokenTransfers: [],
                  },
                  tokensToJoin: [
                    {
                      mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                      amount: 138000,
                      sourceType: 1,
                      index: 0,
                      validationProgram:
                        "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV",
                    },
                  ],
                }) +
                "' >> ma2" +
                count123.toString() +
                ".json",
              function (error, stdout, stderr) {
                var ls = exec(
                  "echo '" +
                    JSON.stringify({
                      winOracle: null,
                      matchState: { finalized: true },
                      winOracleCooldown: 0,
                      space: 300,
                      minimumAllowedEntryTime: null,
                      tokenEntryValidation: null,
                      authority: "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                      leaveAllowed: true,
                      joinAllowedDuringStart: true,
                      oracleState: {
                        seed: seeds[seeds.length - 1].replace("\n", ""),
                        authority:
                          "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                        finalized: false,
                        tokenTransferRoot: null,
                        tokenTransfers: [],
                      },
                      tokensToJoin: [
                        {
                          mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                          amount: 138000,
                          sourceType: 1,
                          index: 0,
                          validationProgram:
                            "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV",
                        },
                      ],
                    }) +
                    "' >> ma2f" +
                    count123.toString() +
                    ".json",
                  function (error, stdout, stderr) {
                    if (error) {
                      console.log(error.stack);
                      console.log("Error code: " + error.code);
                      console.log("Signal received: " + error.signal);
                    }
                    console.log("Child Process STDOUT: " + stdout);
                    console.log("Child Process STDERR: " + stderr);
                  }
                );

                ls.on("exit", function (code) {
                  console.log("Child process exited with exit code " + code);
                  try {
                    var ls = exec(
                      "sh do2.sh m2" +
                        count123.toString() +
                        ".json ma2" +
                        count123.toString() +
                        ".json",
                      function (error, stdout, stderr) {
                        if (error) {
                          console.log(error.stack);
                          console.log("Error code: " + error.code);
                          console.log("Signal received: " + error.signal);
                        }
                        console.log("Child Process STDOUT: " + stdout);
                        console.log("Child Process STDERR: " + stderr);
                      }
                    );

                    ls.on("exit", function (code) {
                      console.log(
                        "Child process exited with exit code " + code
                      );

                      maybe = Math.floor(new Date().getTime() / 1000 / 1000);
                    });
                  } catch (err) {}
                });
              }
            );
          });
        } catch (err) {}
      }
    );
  });
});

setInterval(async function () {
  try {
    maybe = Math.ceil(new Date().getTime() / 1000 / 1000);
    if (maybe > nextthousand) {
      nextthousand = maybe;

      configs[0].matchState = { finalized: true };

      fs.writeFileSync(
        count123.toString() + "/blurp.json",
        JSON.stringify(configs[0])
      );

      var ls = exec(
        "matches-cli update_match -k id -env mainnet-beta -cp " +
          count123.toString() +
          "/blurp.json",
        function (error, stdout, stderr) {
          if (error) {
            console.log(error.stack);
            console.log("Error code: " + error.code);
            console.log("Signal received: " + error.signal);
          }
          console.log("Child Process STDOUT: " + stdout);
          console.log("Child Process STDERR: " + stderr);
        }
      );

      ls.on("exit", async function (code) {
        console.log("Child process exited with exit code " + code);

        nextthousand = maybe;

        if (configs.length > 0) {
          count123++;
          try {
            fs.mkdirSync(count123.toString());
          } catch (err) {}
          counter = 0;

          configs[0].oracleState.tokenTransfers[0].to =
            "A5eoEyc8GFLhu8wtmRPfDDrhyx1qQyPUKEQBHrpmxaND";

          fs.writeFileSync(
            count123.toString() + "/" + counter.toString() + ".json",
            JSON.stringify(configs[0])
          );
          var ls = exec(
            "sh do.sh " + count123.toString() + "/" + "0.json",
            function (error, stdout, stderr) {
              if (error) {
                console.log(error.stack);
                console.log("Error code: " + error.code);
                console.log("Signal received: " + error.signal);
              }
              console.log("Child Process STDOUT: " + stdout);
              console.log("Child Process STDERR: " + stderr);
            }
          );

          ls.on("exit", function (code) {
            console.log("Child process exited with exit code " + code);

            for (var config of configs) {
              counter++;
              let haha = Math.random();
              if (haha < 0.1) {
                // 10% hydra
                config.oracleState.tokenTransfers[0].to =
                  "A5eoEyc8GFLhu8wtmRPfDDrhyx1qQyPUKEQBHrpmxaND";
              } else {
                //if (haha < 0.2){ //10% 2
                config.oracleState.tokenTransfers[0].to =
                  configs[
                    configs.length - 1
                  ].oracleState.tokenTransfers[0].from;
              } /*
    else if  (configs.length > 3 && haha < 0.3){//10% 3
      config.oracleState.tokenTransfers[0].to = configs[configs.length-3].oracleState.tokenTransfers[0].from
    }
    else if  (configs.length > 2 && haha < 0.5){//20% 3
      config.oracleState.tokenTransfers[0].to = configs[configs.length-2].oracleState.tokenTransfers[0].from    
    }
    else { // 50% 1st
      config.oracleState.tokenTransfers[0].to = configs[configs.length-1].oracleState.tokenTransfers[0].from  

    }*/
              console.log(counter);

              fs.writeFileSync(
                count123.toString() + "/" + counter.toString() + ".json",
                JSON.stringify(config)
              );

              var ls = exec(
                "sh do.sh " +
                  count123.toString() +
                  "/" +
                  counter.toString() +
                  ".json",
                function (error, stdout, stderr) {
                  if (error) {
                    console.log(error.stack);
                    console.log("Error code: " + error.code);
                    console.log("Signal received: " + error.signal);
                  }
                  console.log("Child Process STDOUT: " + stdout);
                  console.log("Child Process STDERR: " + stderr);
                }
              );

              ls.on("exit", function (code) {
                console.log("Child process exited with exit code " + code);
                var ls = exec(
                  "matches-cli create_or_update_oracle -k id -env mainnet-beta -cp " +
                    count123.toString() +
                    "/" +
                    counter.toString() +
                    ".json",
                  function (error, stdout, stderr) {
                    if (error) {
                      console.log(error.stack);
                      console.log("Error code: " + error.code);
                      console.log("Signal received: " + error.signal);
                    }
                    console.log("Child Process STDOUT: " + stdout);
                    console.log("Child Process STDERR: " + stderr);
                  }
                );
              });
            }
          });

          let is = [];
          let c1 = 0;
          let c2 = 0;
          let hmms = {};
          let configs2 = [];
          let pot = 0;
          for (var iii in configs2) {
            if (!Object.keys(nogos).includes(configs[iii].from)) {
              if (
                configs[iii].to ==
                configs[configs.length - 1].oracleState.tokenTransfers[0].from
              ) {
                if (!Object.keys(hmms).includes(configs[iii].from)) {
                  hmms[configs[iii].from] = [0, 0];
                }

                hmms[configs[iii].from][0] +=
                  configs[
                    configs.length - 1
                  ].oracleState.tokenTransfers[0].amount;
              } else if (
                configs[iii].to ==
                "A5eoEyc8GFLhu8wtmRPfDDrhyx1qQyPUKEQBHrpmxaND"
              ) {
                if (!Object.keys(hmms).includes(configs[iii].from)) {
                  hmms[configs[iii].from] = [0, 0];
                }

                hmms[configs[iii].from][1] +=
                  configs[
                    configs.length - 1
                  ].oracleState.tokenTransfers[0].amount;
              }
            } else {
              pot +=
                configs[configs.length - 1].oracleState.tokenTransfers[0]
                  .amount;
            }
          }
          nogos = {}
          discos = {}
          for (var a1 in Object.keys(hmms)) {
            var ls = exec(
              " echo '" +
                JSON.stringify({
                  winOracle: null,
                  matchState: { initialized: true },
                  winOracleCooldown: 0,
                  space: 300,
                  minimumAllowedEntryTime: null,
                  tokenEntryValidation: null,
                  authority: "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                  leaveAllowed: true,
                  joinAllowedDuringStart: true,
                  oracleState: {
                    seed: seeds[seeds.length - 1].replace("\n", ""),
                    authority: "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                    finalized: false,
                    tokenTransferRoot: null,
                    tokenTransfers: [
                      {
                        from: a1,
                        to: configs[configs.length - 1].oracleState
                          .tokenTransfers[0].from,
                        tokenTransferType: { normal: true },
                        mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                        amount:
                          hmms[a1][0] +
                          Math.floor(pot / Object.keys(hmms).length),
                      },
                      {
                        from: a1,
                        to: "A5eoEyc8GFLhu8wtmRPfDDrhyx1qQyPUKEQBHrpmxaND",
                        tokenTransferType: { normal: true },
                        mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                        amount:
                          hmms[a1][1] +
                          Math.floor(pot / Object.keys(hmms).length),
                      },
                    ],
                  },
                  tokensToJoin: [
                    {
                      mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                      amount: 138000,
                      sourceType: 1,
                      index: 0,
                      validationProgram:
                        "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV",
                    },
                  ],
                }) +
                "' >> " +
                count123.toString() +
                "/" +
                a1 +
                ".json",
              function (error, stdout, stderr) {
                if (error) {
                  console.log(error.stack);
                  console.log("Error code: " + error.code);
                  console.log("Signal received: " + error.signal);
                }
                console.log("Child Process STDOUT: " + stdout);
                console.log("Child Process STDERR: " + stderr);
              }
            );

            ls.on("exit", function (code) {
              console.log("Child process exited with exit code " + code);
              try {
                var ls = exec(
                  "matches-cli update_match_from_oracle  -k id -env mainnet-beta -cp " +
                    count123.toString() +
                    "/" +
                    a1 +
                    ".json",
                  function (error, stdout, stderr) {
                    if (error) {
                      console.log(error.stack);
                      console.log("Error code: " + error.code);
                      console.log("Signal received: " + error.signal);
                    }
                    console.log("Child Process STDOUT: " + stdout);
                    console.log("Child Process STDERR: " + stderr);
                  }
                );

                ls.on("exit", function (code) {
                  var ls = exec(
                    "matches-cli disburse_tokens_by_oracle  -k id -env mainnet-beta -cp " +
                      count123.toString() +
                      "/" +
                      a1 +
                      ".json",
                    function (error, stdout, stderr) {
                      if (error) {
                        console.log(error.stack);
                        console.log("Error code: " + error.code);
                        console.log("Signal received: " + error.signal);
                      }
                      console.log("Child Process STDOUT: " + stdout);
                      console.log("Child Process STDERR: " + stderr);
                    }
                  );
                });

                ls.on("exit", function (code) {
                  console.log("Child process exited with exit code " + code);
                });
                console.log(1231231231223);
              } catch (err) {
                console.log(err);
              }
            });
          }
          configs = [];
          var ls = exec(
            "solana-keygen new --no-bip39-passphrase --force   -o" +
              count123.toString() +
              ".json",
            function (error, stdout, stderr) {
              if (error) {
                console.log(error.stack);
                console.log("Error code: " + error.code);
                console.log("Signal received: " + error.signal);
              }
              console.log("Child Process STDOUT: " + stdout);
              console.log("Child Process STDERR: " + stderr);
            }
          );

          ls.on("exit", function (code) {
            console.log("Child process exited with exit code " + code);

            var ls = exec(
              "solana address -k " + count123.toString() + ".json",
              function (error, stdout, stderr) {
                if (error) {
                  console.log(error.stack);
                  console.log("Error code: " + error.code);
                  console.log("Signal received: " + error.signal);
                }
                console.log("Child Process STDOUT: " + stdout);
                console.log("Child Process STDERR: " + stderr);
              }
            );

            ls.on("exit", function (code) {
              console.log("Child process exited with exit code " + code);
              var ls = exec(
                "solana address -k " + count123.toString() + ".json",
                function (error, stdout, stderr) {
                  if (error) {
                    console.log(error.stack);
                    console.log("Error code: " + error.code);
                    console.log("Signal received: " + error.signal);
                  }
                  console.log("Child Process STDOUT: " + stdout);
                  nextseed = stdout;
                  seeds.push(nextseed);
                  winning = {
                    winning: winning.winning,
                    lastplay: Math.ceil(new Date().getTime() / 1000),
                    nextseed,
                    seeds,
                    nextthousand: Math.ceil(new Date().getTime() / 1000 / 1000),
                    s: new Date().getTime(),
                  };
                  console.log(stdout);
                  console.log(stdout);
                  console.log(stdout);
                  console.log(stdout);

                  console.log("Child Process STDERR: " + stderr);
                  try {
                    var ls = exec(
                      " echo '" +
                        JSON.stringify({
                          winOracle: null,
                          matchState: { initialized: true },
                          winOracleCooldown: 0,
                          space: 300,
                          minimumAllowedEntryTime: null,
                          tokenEntryValidation: null,
                          authority:
                            "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                          leaveAllowed: true,
                          joinAllowedDuringStart: true,
                          oracleState: {
                            seed: seeds[seeds.length - 1].replace("\n", ""),
                            authority:
                              "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                            finalized: false,
                            tokenTransferRoot: null,
                            tokenTransfers: [],
                          },
                          tokensToJoin: [
                            {
                              mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                              amount: 138000,
                              sourceType: 1,
                              index: 0,
                              validationProgram:
                                "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV",
                            },
                          ],
                        }) +
                        "' >> m" +
                        count123.toString() +
                        ".json",
                      function (error, stdout, stderr) {
                        if (error) {
                          console.log(error.stack);
                          console.log("Error code: " + error.code);
                          console.log("Signal received: " + error.signal);
                        }
                        console.log("Child Process STDOUT: " + stdout);
                        console.log("Child Process STDERR: " + stderr);
                      }
                    );

                    ls.on("exit", function (code) {
                      console.log(
                        "Child process exited with exit code " + code
                      );

                      var ls = exec(
                        "echo '" +
                          JSON.stringify({
                            winOracle: null,
                            matchState: { started: true },
                            winOracleCooldown: 0,
                            space: 300,
                            minimumAllowedEntryTime: null,
                            tokenEntryValidation: null,
                            authority:
                              "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                            leaveAllowed: true,
                            joinAllowedDuringStart: true,
                            oracleState: {
                              seed: seeds[seeds.length - 1].replace("\n", ""),
                              authority:
                                "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
                              finalized: false,
                              tokenTransferRoot: null,
                              tokenTransfers: [],
                            },
                            tokensToJoin: [
                              {
                                mint: "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
                                amount: 138000,
                                sourceType: 1,
                                index: 0,
                                validationProgram:
                                  "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV",
                              },
                            ],
                          }) +
                          "' >> ma" +
                          count123.toString() +
                          ".json",
                        function (error, stdout, stderr) {
                          if (error) {
                            console.log(error.stack);
                            console.log("Error code: " + error.code);
                            console.log("Signal received: " + error.signal);
                          }
                          console.log("Child Process STDOUT: " + stdout);
                          console.log("Child Process STDERR: " + stderr);
                        }
                      );

                      ls.on("exit", function (code) {
                        console.log(
                          "Child process exited with exit code " + code
                        );
                        try {
                          var ls = exec(
                            "sh do2.sh m" +
                              count123.toString() +
                              ".json ma" +
                              count123.toString() +
                              ".json",
                            function (error, stdout, stderr) {
                              if (error) {
                                console.log(error.stack);
                                console.log("Error code: " + error.code);
                                console.log("Signal received: " + error.signal);
                              }
                              console.log("Child Process STDOUT: " + stdout);
                              console.log("Child Process STDERR: " + stderr);
                            }
                          );

                          ls.on("exit", function (code) {
                            console.log(
                              "Child process exited with exit code " + code
                            );
                          });
                        } catch (err) {}
                        try {
                          var ls = exec(
                            "sh do3.sh " + count123.toString() + "/" + "0.json",
                            function (error, stdout, stderr) {
                              if (error) {
                                console.log(error.stack);
                                console.log("Error code: " + error.code);
                                console.log("Signal received: " + error.signal);
                              }
                              console.log("Child Process STDOUT: " + stdout);
                              console.log("Child Process STDERR: " + stderr);
                            }
                          );

                          ls.on("exit", function (code) {
                            console.log(
                              "Child process exited with exit code " + code
                            );
                          });
                        } catch (err) {}
                      });
                    });
                  } catch (err) {}
                }
              );
            });

            ls.on("exit", function (code) {
              console.log("Child process exited with exit code " + code);
            });
          });
        }
      });
      winning = {
        winning: winning.winning,
        lastplay: winning.lastplay,
        nextseed,
        seeds,
        nextthousand: Math.ceil(new Date().getTime() / 1000 / 1000),
        s: new Date().getTime(),
      };
    }
  } catch (err) {
    console.log(err);
  }
}, 1000 * 50);
let discos = {};
let nogos = {};
app.use(express.json());
app.get("/stuff", async function (req, res) {
  //console.log(winning)
  res.send(winning);
});
app.post("/join", jsonParser, async function (req, res) {
  try {
    let config = req.body;
    if (Object.keys(discos).includes(config.oracleState.tokenTransfers[0].from)) {
      if (discos[config.oracleState.tokenTransfers[0].from] + 10 >  new Date().getTime() / 1000 || discos[config.oracleState.tokenTransfers[0].from] + 2 <  new Date().getTime() / 1000){
        nogos[config.oracleState.tokenTransfers[0].from] = 1;
      } 
      else {
        discos[config.oracleState.tokenTransfers[0].from] = new Date().getTime() / 1000;
      }
    } else {
      discos[config.oracleState.tokenTransfers[0].from] = new Date().getTime() / 1000;
    }

    ablarg(config.oracleState.tokenTransfers[0].from);
    winning = {
      winning: config.oracleState.tokenTransfers[0].from,
      lastplay: Math.ceil(new Date().getTime() / 1000),
      nextseed,
      seeds,
      nextthousand: Math.ceil(new Date().getTime() / 1000 / 1000),
      s: new Date().getTime(),
    }; //
    // config.oracleState.finalized = true
    configs.push(config);
    console.log(configs.length);
  } catch (err) {
    console.log(err);
  }
});

console.log(nextthousand);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
