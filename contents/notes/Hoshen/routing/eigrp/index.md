---
title: "EIGRP - Enhanced Interior Gateway Routing Protocol"
description: "EIGRP overcomes the faults of other distance vector routing protocols such as RIP, with features such as unequal-cost load balancing and it uses DUAL algorithm to determine network paths, unlike other *distance vector* routing protocols, EIGRP uses factors other (yet included) than hop count."
---

# EIGRP - Enhanced Interior Gateway Routing Protocol

**EIGRP** overcomes the faults of other distance vector routing protocols such as **RIP**, with features such****as *unequal-cost load balancing* and it uses ***DUAL*** algorithm to determine network paths, unlike other *distance vector* routing protocols, EIGRP uses factors other (yet included) than **hop count**.

## Autonomous Systems (AS)

Each EIGRP process runs under an **Autonomous System**, routers withing the same **AS** use the same *metric calculation* formula, and shares its routing topology table only with routers under the same domain.

## Path selection

EIGRP calculates the best path, and alternative *loop free* paths based on a metric calculation.

While calculation those paths we come across different terms such as:

| **Term**                | **Definition**                                                                                                                                                                                                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Successor route         | The route with the lowest path metric to reach a destination.                                                                                                                                                           |
| Successor               | The first next-hop router for the successor route.                                                                                                                                                                      |
| Feasible Adistance (FD) | The metric value for the lowest-metric path to reach a destination. The feasible distance is calculated locally using *Path Metric Calculation*.                                                                        |
| Reported distance (RD)  | The distance reported by a router to reach a prefix. The reported distance value is the feasible distance for the *advertising router*.                                                                                 |
| Feasibility condition   | A condition under which, for a route to be considered a backup route, the reported distance received for that route must be less than the feasible distance calculated locally. This logic guarantees a loop-free path. |
| Feasible successor      | A route that satisfies the feasibility condition and is maintained as a backup route. The feasibility condition ensures that the backup route is loop free.                                                             |

## Tables

### Topology table

Unlike *true* distance vector routing protocols, EIGRP uses a **topology table**.

This table is a vital component to *DUAL* and contains information to find **loop-free** backup routes.

Each entry of the table consists of the followings:

- Network prefix

- EIGRP neighbors on the same prefix

- Metrics from each neighbor (RD, hop count, etc...)

- Metric values (load, reliability, total delay, minimum bandwidth)

**Example topology table:**

```text
R1#show ip eigrp topology
EIGRP-IPv4 Topology Table for AS(100)/ID(192.168.1.1)
Codes: P - Passive, A - Active, U - Update, Q - Query, R - Reply,
r - reply Status, s - sia Status
P 10.12.1.0/24, 1 successors, FD is 2816
    via Connected, GigabitEthernet0/3
P 10.13.1.0/24, 1 successors, FD is 2816
    via Connected, GigabitEthernet0/1
P 10.14.1.0/24, 1 successors, FD is 5120
    via Connected, GigabitEthernet0/2
P 10.23.1.0/24, 2 successors, FD is 3072
    via 10.12.1.2 (3072/2816), GigabitEthernet0/3
    via 10.13.1.3 (3072/2816), GigabitEthernet0/1
P 10.34.1.0/24, 1 successors, FD is 3072
    via 10.13.1.3 (3072/2816), GigabitEthernet0/1
    via 10.14.1.4 (5376/2816), GigabitEthernet0/2
P 10.24.1.0/24, 1 successors, FD is 5376
    via 10.12.1.2 (5376/5120), GigabitEthernet0/3
    via 10.14.1.4 (7680/5120), GigabitEthernet0/2
P 10.4.4.0/24, 1 successors, FD is 3328
    via 10.13.1.3 (3328/3072), GigabitEthernet0/1
    via 10.14.1.4 (5376/2816), GigabitEthernet0/2
```

### EIGRP Neighbors table

EIGRP Neighbors table consists of information of each **directly connected**, including ip addresses, interfaces and more.

### Routing table

This table contains the best routes that have been selected from the topology and the backup routes that has no loops. (Successor route and backup routes)

### Metric calculation

Metric calculation is a critical component for any routing protocol. EIGRP uses **multiple
factors** to calculate the metric for a path.

Metric calculation uses *bandwidth* and *delay* by default, but it can include *interface load* and *reliability*, too.

**EIGRP classic metric formula:**

$$
[(K1 * BW + + K3 * Delay) ] K2 * BW
256 Load
K5
K4 + Reliability
$$

EIGRP use **K values** (K1, K2, etc...) to define which factors are used in the formula and how strong of an effect a factor has when calculating the metric.

**BW** represents the slowest link in the path scaled to a 10 Gbps link, so for example, 10 Mbps is 0.01 Gbps.

>  Link speed is collected via the configured bandwidth on the interfaces.

**Delay** is the total measure of delay in the path, measured in the tens of microseconds.

> Due to this being unrelated to what I need to do, I decided to not continue to write about the metric. (Issacs fault)

---

# Yoels takes

- EIGRP supports up to 16 paths to the same node.
- Unlike all other IGP routing protocols, EIGRP supports unequal load balancing by changing the **variance** value.

## Changing the variance

We can take a backup route and turn it to an active route even trough the metric is lower, essentialy turning the feasible successor to a successor.

It can achive that by using the following function:

```javascript
FD(Active route) * Variance >= FD(Backup route)
```

### For example:

To calculate the needed variance needed to create unequal loadbalancing we can use the following calculation:

```javascript
FD(Active route) / FD(Backup route) = Needed variance
```

![Hero](/Hoshen/routing/eigrp/eigrp.png)

## Schema

סכמה היא הדרך שלנו לצמצם שורות בטבלת ניתוב, היא בעצם סוכמת את כל הניתובים לפי ה **classfull** שלהם, כלומר:

בכדי לבטל סכמה יש להשתמש בפקודה `no auto-summary`.

כאשר עושים סכמה אוטומאטית, נוצרת שורה שבה רשום **"is a summary"** ובסוף כתוב **null0**.

### סכמה ידנית

כדי לסכום ידנית:

1. להעתיק את הכתובת IP

2. לתרגם לבינארי

3. לבדוק כמה ביטים תואמים



192.168.1.0: **11000000 10101000 000000**01 00000000
192.168.2.0: **11000000 10101000 000000**10 00000000
192.168.3.0: **11000000 10101000 000000**11 00000000




יש לנו 22 ביטים תואמים, לכן הפרפיקס הוא 22:

192.168.0.0/22

ip summery-address eigrp 1 192.168.0.0
