const foo = {
    a: 'foo',
    b: 'bar',
    c: null,
    d: undefined,
    e: 0,
    f: {
        a: 'fuz',
        b: null,
        c: {
            a: 'biz',
            b: 'buz',
            c: [
                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0,
                    f: false
                },
                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0
                },
                {
                    a: 'foo',
                    b: 'bar',
                    c: null,
                    d: undefined,
                    e: 0
                }
            ]
        }
    }
};

const cleanse = (o) => {
    return Array.isArray(o) ? 
    o.filter(v => v != null)
        .map(v => v === Object(v) ? cleanse(v) : v) :
    Object.fromEntries(
        Object.entries(o)
        .filter(([_, v]) => v != null)
        .map(([_, v]) => [_, v === Object(v) ? cleanse(v) : v])
    );
}

res = cleanse(foo);

console.log(JSON.stringify(res, null, 2));
