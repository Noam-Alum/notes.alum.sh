# Static route

Trying to use static route to use a gateway from another LAN on an unknown network.

### The setup in mind is:

```text
                    Network A                     192.168.1.0                      
                ┌──────────────────────────────────────────────┐                   
                │                                              │                   
                │                                              │                   
                │                                              │                   
                │                                              │                   
                │              ┌───────────────┐               │                   
                │              │               │               │                   
 Network B      │              │               │               │      192.168.2.0  
┌───────────────┼──────────────┼──────C1───────┼───────────────┼──────────────────┐
│               │              │               │               │                  │
│               │              │               │               │                  │
│               │              └───────┬───────┘               │                  │
│               │                      │                       │                  │
│               │                      │                       │                  │
│               └──────────────────────┼───────────────────────┘                  │
│                                      │                                          │
│                                      │                                          │
│                                      │                                          │
│                              ┌───────▼───────┐                                  │
│                              │               │                                  │
│                              │               │                                  │
│                              │      S1       │                                  │
│                              │               │                                  │
│                              │               │                                  │
│                              └───────┬───────┘                                  │
│                                      │                                          │
│                 Network C            │                10.0.0.0                  │
│              ┌───────────────────────┼──────────────────────────┐               │
│              │                       │                          │               │
│              │             ┌─────────▼─────────┐                │               │
│              │             │                   │                │               │
└──────────────┼─────────────┼────────C2─────────┼────────────────┼───────────────┘
               │             │                   │                │                
               │             └────────┬──────────┘                │                
               │                      │                           │                
               │                ┌─────▼──────┐                    │                
               │                │            │                    │                
               │                │    R1      │                    │                
               │                │            │                    │                
               │                └────────────┘                    │                
               │                                                  │                
               └──────────────────────────────────────────────────┘                
```

#### Dictionary key:

> All computers (or servers) on this diagram are using Linux.

- **C1:** The first computer (i.e. me...)
- **C2:** The other computer.
- **S1:** The vpn server connecting the two computers. (192.168.2.0)
- **R1:** The router (gateway) im trying to reach from C1.

#### Textual representation:
- **Network A** (192.168.1.0):
  - **C1**: Connected to Network A and Network B.

- **Network B** (192.168.2.0):
  - **S1**: VPN Server.
  - **C2**: Connected to Network B and Network C.
  - **C1**: Router connected to Network B and Network C.

- **Network C** (10.0.0.0):
  - **C2**: Connected to Network C.
  - **R1**: Router in Network C.

---

### Results from last test:

<u>**C1** --> **R1**</u>

```bash
[vagrant@localhost ~]$ tracepath 10.0.0.138
 1?: [LOCALHOST]                      pmtu 1500
 1:  192.168.2.1                                          13.326ms 
 1:  192.168.2.1                                           6.847ms 
 2:  83.229.73.2                                           7.065ms 
 3:  DSL212-143-43-242.bb.netvision.net.il               179.047ms 
 4:  srvc-gw1-0-0-1-0-sub20-srvc4-new.hfa.nv.net.il        7.000ms 
 5:  srvc3-new-1-52-sub10-srvc-gw1.hfa.nv.net.il         168.261ms asymm  3 
 6:  core1-0-2-0-1-srvc3-new.hfa.nv.net.il                 7.940ms asymm  4 
 7:  core1-2241.rhn.nv.net.il                              9.787ms asymm  5 
 8:  no reply
 9:  no reply
10:  no reply
11:  no reply
12:  no reply
13:  no reply
14:  no reply
15:  no reply
16:  no reply
```
