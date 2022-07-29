# Shadow Chess

![banner_image](https://i.imgur.com/GUqHeTq.png)
## • Introduction
Shadow Chess is a combination of the western chess and [a popular game variation of the Chinese chess named "Banqi"](https://en.wikipedia.org/wiki/Banqi), which means half chess, or "Anqi", which means dark chess. In this game variation, only half of the regular Chinese chess board is required and all of the 32 chess pieces are placed facing down so the players do not know which piece is which, hence, "half" or "dark chess". In this casual board game, player's luck will heavily dictate the outcome. 

Are you feeling lucky today? 
#### [Try your luck here!](https://buudee625.github.io/proj-shadow-chess/)

## • Game rules
In Shadow Chess, player Bloom (represented by blue pieces) will play against player Redd (represented by red pieces). At the start of the game, a total of 32 chess pieces, 16 for each player, are randomly distributed across the 8 x 4 game board with the pieces facing down. The game will randomly decide which player goes first, and each player takes one turn to flip a piece over, or move one of their pieces. Every piece is limited to moving one grid directly next to itself, which means diagonal movements are prohibited. 

To launch an attack, both pieces must be uncovered and the attacking piece must be ranked higher than the enemy piece. When a piece is defeated, it is removed from the board and will no longer be playable. All game pieces follow this attacking rule with the exception of the Catapult piece.

When attacking with a Cataputl, there must be another piece, flipped or unflipped, between the Catapult and the target enemy piece. As long as the condition is met, the Catapult's attack is not dictated by the rank hierarchy. This means the Catapult can defeat any pieces, including the enemy King and Catapults.

The game continues until either one side has no pieces left, or the game goes in a standstill scenario.

### Hierarchy and piece distribution
The ranking hierarchy is demonstrated below. The higher ranked piece can defeat pieces of the same rank, and all of the lower ranked pieces. However, Kings cannot defeat pawns as pawns are the only pieces capable of defeating a king. The Catapult is left out of the hierarchy since it has an unique capability.

### King > Queen > Bishop > Rook > Knight > Pawn

### Distribution:

* King: 1
* Queen: 2
* Bishop: 2
* Rook: 2
* Knight: 2
* Pawn: 5
* Catapult: 2

## • Game screenshots
![gameplay_screenshot01](https://i.imgur.com/DgvGoQJ.png)
![gameplay_screenshot02](https://i.imgur.com/Uc8Bgbs.png)

## • Development plan
This is the very first wireframe draft
![wireframe01](https://i.imgur.com/1TEVRE4.png)

## • Current development
The current MVP is set up for demonstration purposes only. In this demo, players are able to move pieces around, launch attack on opponent's piece or flip over one of the four undiscovered pieces. When a player flips over the undiscovered piece, the program will randomly assign it a color and rank from the available pool. Finally, there is a simple winning logic for when one player runs out of game pieces to play. 

## • Future development
  * Implement friend vs foe: the current demo does not consider friends or foes which means it is possible to launch attack on your own pieces which is not part of the game.
  * Implement the Catapult piece: since this piece has an unique attacking pattern, it will require a new set of logic
  * Implement piece identification: the current demo cannot handle when there are mutliple of the same pieces being on the board
  * Resolve existing bugs: the current demo still has bugs that allows pieces to move to areas where it is prohibited.

## • Technologies used
* JavaScript
* CSS
* HTML
* Drag-and-drop HTML API

## • Credits
* My beautiful partner Stephanie
* Wonderful instructors from GA
* CodePener Shireen Taj for the beautiful title CSS effect
