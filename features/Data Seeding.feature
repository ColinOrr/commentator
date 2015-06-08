Feature: Data Seeding

@seed
Scenario: Comments

  Given the following file in "data/sample-post-1/2015-01-01 13:15:30 jasper@domain.com.md":
    """
    ---
    author: Jasper Black
    ---
    *Lorem ipsum* dolor sit amet, consectetur adipiscing elit. Nulla sit amet
    faucibus quam. Maecenas pulvinar tempus dolor, non venenatis purus sagittis at.
    Praesent bibendum, ipsum quis eleifend ultricies, enim sapien pharetra odio, a
    sagittis risus ex nec ipsum. Phasellus in sodales neque, vitae feugiat lorem.
    Nam hendrerit tincidunt efficitur. Vivamus fringilla velit mi, sit amet
    fringilla magna semper in. Nullam elementum tincidunt justo, quis egestas ligula
    tincidunt ut. Mauris consectetur dictum augue sed tincidunt. Morbi turpis lorem,
    pellentesque eget diam a, facilisis lacinia nisi. In neque arcu, dignissim id
    dolor a, aliquet volutpat sapien. In facilisis justo velit, ut tincidunt risus
    fermentum at. Donec commodo dapibus ex vel blandit.
    """

  And the following file in "data/sample-post-1/2015-01-01 14:30:45 benji@domain.com.md":
    """
    ---
    author: Benjamin White
    ---
    *Curabitur quis enim libero*. Donec a neque quis elit volutpat sollicitudin non
    sagittis elit. Nulla molestie mi mi, a fermentum lacus tempus cursus.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
    turpis egestas. Morbi pellentesque nisl nec feugiat imperdiet. Vivamus
    vestibulum massa et sem mollis accumsan. Vestibulum porttitor, nibh at rutrum
    mollis, dui tortor rutrum eros, non feugiat lorem ex vitae neque. Fusce egestas
    faucibus ante, nec venenatis dolor pellentesque a. Vestibulum luctus congue
    tincidunt.
    """

  And the following file in "data/sample-post-1/2015-01-02 09:45:00 jasper@domain.com.md":
    """
    ---
    author: Jasper Black
    ---
    *Duis elementum,* dui in pulvinar auctor, ex nunc pellentesque elit, at semper
    est quam eget ex. Aliquam placerat efficitur interdum. Vivamus laoreet dui id
    lacinia rhoncus. Aliquam vitae porta leo, sit amet consectetur erat. Suspendisse
    ut orci vel lacus semper luctus at non ex. Proin ullamcorper lacus nec orci
    porttitor, sed iaculis purus gravida. Duis rhoncus tincidunt nisl, vitae egestas
    dolor consequat eu. Morbi at urna felis. Nunc aliquet erat et velit condimentum,
    non aliquam magna finibus.
    """

  And the following file in "data/sample-post-2/2015-02-05 12:30:45 murphy@domain.com.md":
    """
    ---
    author: Murphy Green
    ---
    *Ut convallis mauris est,* sed rutrum ex posuere ac. Maecenas varius magna elit,
    ac condimentum ex pharetra a. Morbi in ante maximus, tempor elit eget, viverra
    orci. Ut lectus eros, pellentesque id risus non, lobortis vestibulum dui. Sed in
    venenatis odio. Pellentesque tincidunt molestie viverra. Interdum et malesuada
    fames ac ante ipsum primis in faucibus.
    """
