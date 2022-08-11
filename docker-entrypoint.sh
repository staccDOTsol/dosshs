sh -c "$(curl -sSfL https://release.solana.com/v1.10.32/install)"
    PATH="/root/.local/share/solana/install/active_release/bin:$PATH"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install 16 
npm i -g ts-node yarn raindrops-cli
