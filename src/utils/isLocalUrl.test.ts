import { isLocalUrl } from "./isLocalUrl";

describe("isLocalUrl", () => {
    test.each`
        url                                     | expected
        ${"http://some-domain.com/some-path"}   | ${false}
        ${"https://some-domain.com/some-path"}  | ${false}
        ${"http://some-domain.com/some-path/"}  | ${false}
        ${"https://some-domain.com/some-path/"} | ${false}
        ${"http://some-domain.com"}             | ${false}
        ${"http://some-domain.com/"}            | ${false}
        ${"https://some-domain.com"}            | ${false}
        ${"https://some-domain.com/"}           | ${false}
        ${"/local-path"}                        | ${true}
        ${"/local-path/"}                       | ${true}
        ${"/local-path/some-other-path"}        | ${true}
        ${"/local-path/some-other-path/"}       | ${true}
        ${"local-path/some-other-path/"}        | ${false}
        ${"local-path/some-other-path"}         | ${false}
        ${"local-path/"}                        | ${false}
    `("checks if $url is an app-specific URL", ({ url, expected }) => {
        const result = isLocalUrl(url);
        expect(result).toEqual(expected);
    });
});
