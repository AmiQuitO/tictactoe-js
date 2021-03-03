const lookupTable = [
    {
        when:`
        E P P 
        A A A 
        A A A
        `,do: [0]
    },
    {
        when:`
        E A A 
        P A A 
        P A A
        `,do: [0]
    },
    {
        when:`
        E A A 
        A P A 
        A A P
        `,do: [0]
    },
    {
        when:`
        E E E 
        E E E 
        E E E
        `,do: [4,0]
    },
    {
        when:`
        E E E
        E P E 
        E E E
        `,do: [0]
    },
    {
        when:`
        C E E
        E P E 
        E E P
        `,do: [2]
    },
    {
        when:`
        E E E
        E C E 
        E E P
        `,do: [0]
    }  ,
    {
        when:`
        E E E
        E C E 
        P E E
        `,do: [2]
    } ,
    {
        when:`
        P E E
        E C E 
        E E E
        `,do: [8]
    },
    {
        when:`
        E E P
        E C E 
        E E E
        `,do: [6]
    },
    {
        when:`
        C E E
        E P E 
        E E E
        `,do: [8]
    },
    {
        when:`
        C E E
        E P E 
        P E C
        `,do: [2]
    },
    {
        when:`
        C E P
        E P E 
        E E C
        `,do: [6]
    },
    {
        when:`
        C E P
        E E E 
        E E E
        `,do: [8]
    },
    {
        when:`
        C E P
        E P E 
        E E C
        `,do: [6]
    },
    {
        when:`
        P E E
        E E E 
        E E E
        `,do: [4]
    },
    {
        when:`
        P E E
        E C E 
        E E P
        `,do: [7,1,3,5]
    },
    {
        when:`
        E E P
        E E E 
        E E E
        `,do: [4]
    },
    {
        when:`
        E E P
        E C E 
        P E E
        `,do: [1,7,3,5]
    },
    {
        when:`
        E P E
        E C E 
        E E E
        `,do: [8,6]
    },
    {
        when:`
        E E E
        E C P 
        E E E
        `,do: [0,6]
    },
    {
        when:`
        E E E
        E C E 
        E P E
        `,do: [0,2]
    },
    {
        when:`
        E E E
        P C E 
        E E E
        `,do: [2,8]
    }
        
];