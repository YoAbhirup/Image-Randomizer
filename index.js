const images = document.querySelectorAll('.image');
        
        let globalIndex = 0;
        let z = 1;
        let lastPos={x:0,y:0};

        function activate(image, x, y){
            image.style.left=`${x}px`;
            image.style.top=`${y}px`;

            image.dataset.status="active";

            lastPos={x,y};
        }

        function distanceFromLast(x,y){
            return Math.hypot(x-lastPos.x, y-lastPos.y);
        }

        document.addEventListener('mousemove', (e) =>{

            if(distanceFromLast(e.clientX,e.clientY)>100){
            let lead = images[globalIndex%images.length];
            lead.style.zIndex = z;
            let tail = images[(globalIndex-4)%images.length];

            activate(lead, e.clientX, e.clientY);
            if(tail){
                tail.dataset.status="inactive";
            }
            globalIndex++;
            z++;
            }
        })