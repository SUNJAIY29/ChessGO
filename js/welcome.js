function playChess() {
            // Add your navigation logic here
            window.location.href = 'chess-game.html';
        }

        function playWithRobot() {
            // Add your navigation logic here
            window.location.href = 'chess-ai.html';
        }

        // Enhanced button interactions
        document.querySelectorAll('.game-button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) translateY(-3px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) translateY(0px)';
            });
        });

        // Create floating chess pieces
        function createFloatingPieces() {
            const pieces = ['♔', '♕', '♖', '♗', '♘', '♙'];
            const container = document.getElementById('floatingPieces');
            
            setInterval(() => {
                if (container.children.length < 6) {
                    const piece = document.createElement('div');
                    piece.className = 'floating-piece';
                    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
                    piece.style.left = Math.random() * 100 + 'vw';
                    piece.style.animationDelay = Math.random() * 5 + 's';
                    piece.style.animationDuration = (Math.random() * 10 + 10) + 's';
                    
                    container.appendChild(piece);
                    
                    // Remove piece after animation
                    setTimeout(() => {
                        if (piece.parentNode) {
                            piece.parentNode.removeChild(piece);
                        }
                    }, 20000);
                }
            }, 3000);
        }

        // Initialize floating pieces
        createFloatingPieces();

        