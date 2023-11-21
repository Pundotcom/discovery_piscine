if [ $# -lt 1 ]; then
echo "No arguments supplied"
exit 0
fi

echo "$1"

if [ $# -lt 2 ]; then
exit 0
fi
echo "$2"
if [ $# -lt 3 ]; then
exit 0
fi
echo "$3"
