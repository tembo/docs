{
  description = "Tembo docs dev shell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22
          ];

          shellHook = ''
            export NPM_CONFIG_PREFIX="$HOME/.npm-global"
            export PATH="$HOME/.npm-global/bin:$PATH"

            if ! command -v mintlify &>/dev/null; then
              echo "Installing mintlify CLI..."
              npm install --global mintlify
            fi

            echo "Run 'mintlify dev' to start the docs server."
          '';
        };
      });
}
