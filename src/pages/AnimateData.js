export default{
    hidden: {opacity: 0,y: 200,},
    show: {opacity: 1,y: 0,
           transition: {
            ease: "easeInOut",
            duration: 0.6,
        },
    },
    exit:{opacity: 0,y:-200,
        transition: {
            ease: "easeInOut",
            duration: 0.6,
        }
    }
};