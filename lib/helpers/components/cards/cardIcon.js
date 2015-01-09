"use strict";

function cardIcon(kind) {
  return kind === "need-to-know" ? "information" : kind;
}

module.exports = cardIcon;