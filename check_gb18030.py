"""Check whether a file can be strictly decoded as GB18030.

Usage: python check_gb18030.py <file>
Successful decoding does not prove the file's original encoding.
"""

import argparse
import sys
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("file", type=Path, help="File to validate")
    args = parser.parse_args()

    try:
        data = args.file.read_bytes()
    except OSError as error:
        print(f"Cannot read file: {error}", file=sys.stderr)
        return 1

    try:
        text = data.decode("gb18030", errors="strict")
    except UnicodeDecodeError as error:
        print(
            f"Invalid GB18030 at byte offset {error.start}: {error.reason}",
            file=sys.stderr,
        )
        return 1

    print(f"Valid GB18030 byte sequence: {len(data)} bytes, {len(text)} characters")
    return 0


if __name__ == "__main__":
    sys.exit(main())
