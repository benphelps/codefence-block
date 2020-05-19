#/bin/bash

# parts borrowed from
# https://github.com/WordPress/gutenberg/blob/master/bin/build-plugin-zip.sh

# Enable nicer messaging for build status.
BLUE_BOLD='\033[1;34m';
GREEN_BOLD='\033[1;32m';
COLOR_RESET='\033[0m';

status () {
	echo "${BLUE_BOLD}$1${COLOR_RESET}\n"
}
success () {
	echo "${GREEN_BOLD}$1${COLOR_RESET}\n"
}

status "Building codefence-block.zip"

status "Installing dependencies..."
npm install

status "Generating build..."
npm run build

status "Creating archive..."

zip -r codefence-block.zip codefence.php readme.txt assets/ build/

success "Success, codefence-block.zip generated."
