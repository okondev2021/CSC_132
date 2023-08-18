document.addEventListener('DOMContentLoaded',function(){


    // CHANGING THE THEME OF THE WEBSITE

    const primary = "#FDF7FF";
    const secondary = "#1C0733";
    const secondaryTwo = "#ae9dc0";
    const tertiary = "#E8D5B5" ;

    document.querySelectorAll(".mode").forEach(function(mode){

        mode.addEventListener('click', function(){

            mode.classList.toggle('dark_theme')
    
            if(mode.classList.contains("dark_theme")){
    
                // BASIC CHANGES TO MODE DIV
                document.querySelectorAll('.round_ball').forEach(function(round_ball){
                    round_ball.style.background = primary
                })
                document.querySelectorAll('.ball').forEach(function(ball){
                    ball.style.justifyContent = 'flex-end'
                })
                document.querySelectorAll('.theme').forEach(function(theme){
                    theme.style.background = secondary
                })
    
                // CHANGES MADE TO DOCUMENT

                document.querySelector('.container').style.background = secondary
                document.querySelector('.email').style.background = "#9e60bd"
                document.querySelector('footer').style.background = "#0b0215"
                // MINOR ELEMENTS
                document.querySelector('.logo_text').style.color = "#603682"
                document.querySelectorAll('.nav_links').forEach(function(nav_links){
                    nav_links.style.color = "#5f6b93"
                })

                document.querySelectorAll('h1').forEach(function(h1){
                    h1.style.color = "#d6cacd"
                })
                document.querySelectorAll('h2').forEach(function(h2){
                    h2.style.color = "#d6cacd"
                })
                document.querySelectorAll('h3').forEach(function(h3){
                    h3.style.color = "#d6cacd"
                })
                document.querySelectorAll('h5').forEach(function(h5){
                    h5.style.color = tertiary
                })

                document.querySelector('.email_header').style.color = tertiary

                document.querySelector(".arrow_top").style.background = tertiary
                document.querySelector(".arrow").style.color = secondary

    
    
    
            }
            
            else{
                
                // BASIC CHANGES TO MODE DIV
                document.querySelectorAll('.round_ball').forEach(function(round_ball){
                    round_ball.style.background = secondary
                })
                document.querySelectorAll('.ball').forEach(function(ball){
                    ball.style.justifyContent = 'flex-start'
                })
                document.querySelectorAll('.theme').forEach(function(theme){
                    theme.style.background = primary
                })
    
                // CHANGES MADE TO DOCUMENT

                document.querySelector('.container').style.background = primary
                document.querySelector('.email').style.background = tertiary
                document.querySelector('footer').style.background = secondary

                document.querySelectorAll('h1').forEach(function(h1){
                    h1.style.color = secondary
                })
                document.querySelectorAll('h2').forEach(function(h2){
                    h2.style.color = secondary
                })
                document.querySelectorAll('h3').forEach(function(h3){
                    h3.style.color = secondary
                })
                document.querySelectorAll('h5').forEach(function(h5){
                    h5.style.color = tertiary
                })


                document.querySelector(".arrow_top").style.background = secondary
                document.querySelector(".arrow").style.color = tertiary
    
            }

        })

    })

    

   // DISPLAY SIDE ARROW BASED ON LOCATION
    window.onscroll = function(){

        const isAtTop = window.scrollY === 0 || document.documentElement.scrollTop === 0
        if(window.scrollY >=  document.body.scrollHeight/2){
            document.querySelector('.arrow_top').style.display = 'block'
        }
        else{
            if(isAtTop){
                document.querySelector('.arrow_top').style.display = 'none'
            }
        }

    }


    // REVEAL ANIMATIONS

    const rightHero = document.querySelector(".hero_right")
    rightHero.classList.add("reveal_hero_right")

    const leftH1 = document.querySelector(".hero_left_h1")
    leftH1.classList.add("reveal_h1")

    const leftP = document.querySelector(".hero_left_p")
    leftP.classList.add("reveal_p")

    const leftButton = document.querySelector(".hero_left_button")
    leftButton.classList.add("reveal_button")

    function reveal(name, item){
        var windowheight = window.innerHeight
        var revealtop = item.getBoundingClientRect().top
        var reavealpoint = 0
        if (revealtop < windowheight - reavealpoint){
            item.classList.add(name)
        }
        else{
            item.classList.remove(name)
        }
    }

    function revealProjectImage(){
        document.querySelectorAll('.project_img').forEach(function(project_img){
            reveal('reveal_project_img', project_img)
        })
    }
    window.addEventListener('scroll',revealProjectImage)

    function revealCollaboratorSection(){
        document.querySelectorAll('.collaborators_track').forEach(function(collaborators_track){
            reveal('reveal_collaborators_track', collaborators_track)
        })
    }
    window.addEventListener('scroll',revealCollaboratorSection)





    
    const width = window.innerWidth

    const parent = document.querySelector('.collaborators_track')
    const numbersOfContributors = parent.childElementCount

    // COLLABORATORS ANIMATION FOR TABLET DEVICE

    if(width <= 768 && width >= 600){

        // Set the display property of the last child element to none
        const parentDiv = document.querySelector('.collaborators_track')
        parentDiv.lastElementChild.style.display = 'none'

        // Switch collaborators after the set time

        var animationCount = []
        for(let i = 1; i<= numbersOfContributors; i++){
            animationCount.push(i)
        }

        setInterval(()=>{

            const prevFirst = parentDiv.firstElementChild

            parentDiv.firstElementChild.remove()
            parentDiv.lastElementChild.style.display = 'block'

            parentDiv.append(prevFirst)
            prevFirst.style.display = 'none'

        }, 3000 )

    }




    // COLLABORATORS ANIMATION FOR MOBILE DEVICE
    if(width <= 560){

        document.querySelectorAll(".collaborator").forEach(function(collaborator){
            collaborator.style.display = 'none'
        })
        document.getElementById('collaborator_1').style.display = 'block'

        var collaborator_count = 1;
        var collaboratorsCount = numbersOfContributors
        
        setInterval(()=>{

            document.querySelectorAll(".collaborator").forEach(function(collaborator){
                collaborator.style.display = 'none'
            })
            document.getElementById(`collaborator_${collaborator_count}`).style.display = 'block'

            collaborator_count++

            if (collaborator_count > collaboratorsCount){
                collaborator_count = 1
            }



        }, 3000)

    }



    // MOBILE NAV BAR

    document.querySelector('.hamburger').addEventListener('click', function(){
        document.querySelector('.mobile_nav_bar').style.display = 'block'

        setTimeout(() => {
            document.querySelector('.mobile_nav_bar').style.opacity = '1'
        }, 500);
    })


    document.querySelector('.close_div').addEventListener('click', function(){
        document.querySelector('.mobile_nav_bar').style.opacity = '0'

        setTimeout(() => {
            document.querySelector('.mobile_nav_bar').style.display = 'none'
        }, 1000);
    })

    document.querySelectorAll(".mobile_nav_item").forEach(function(mobile_nav_item){
        mobile_nav_item.addEventListener("click", function(){

            document.querySelector('.mobile_nav_bar').style.opacity = '0'

            setTimeout(() => {
                document.querySelector('.mobile_nav_bar').style.display = 'none'
            }, 1000);
            
        })
    })












})