sh -c "$(curl -sSfL https://release.solana.com/v1.10.32/install)"
    PATH="/root/.local/share/solana/install/active_release/bin:$PATH"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install 16 

npm i -g ts-node yarn raindrops-cli

wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar xfv *.tgz
./ngrok config add-authtoken 1xi7CdwkB7PPYqaH9AfW1Mt8e2M_wA24a91oziAs3mBYhBXe
tmux
./ngrok http 3000 --hostname www.autist.design
