#!/bin/bash

# Carmen ERP Documentation Server
# Quick script to serve the documentation website

echo "🚀 Starting Carmen ERP Documentation Server..."
echo ""
echo "Choose a server option:"
echo "1) Python 3 (Recommended)"
echo "2) Python 2"
echo "3) PHP"
echo "4) Node.js (requires http-server: npm install -g http-server)"
echo ""
read -p "Enter option (1-4): " option

case $option in
    1)
        echo "Starting Python 3 server on http://localhost:8000"
        python3 -m http.server 8000
        ;;
    2)
        echo "Starting Python 2 server on http://localhost:8000"
        python -m SimpleHTTPServer 8000
        ;;
    3)
        echo "Starting PHP server on http://localhost:8000"
        php -S localhost:8000
        ;;
    4)
        echo "Starting Node.js server on http://localhost:8000"
        http-server -p 8000
        ;;
    *)
        echo "Invalid option. Defaulting to Python 3..."
        python3 -m http.server 8000
        ;;
esac
