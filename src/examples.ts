export const m1 = `
graph TD
A[Client] --> B[Load Balancer]
B --> C[Server01]
B --> D[Server02]
`;

export const m2 = `
gantt
title A Gantt Diagram
dateFormat  YYYY-MM-DD
section Section
A task           :a1, 2014-01-01, 30d
Another task     :after a1  , 20d
section Another
Task in sec      :2014-01-12  , 12d
another task      : 24d`;

export const m2j = `gantt
title ガントチャートのサンプル
dateFormat  YYYY-MM-DD
section あるセクション
とあるタスク          :a1, 2014-01-01, 30d
別のタスク    :after a1  , 20d
section 別のセクション
秘密のタスク     :2014-01-12  , 12d
またタスク    : 24d`;

export const m3 = `pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15`;
