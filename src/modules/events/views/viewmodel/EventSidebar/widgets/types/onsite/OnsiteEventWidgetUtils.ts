export function formatDescription(description: string): string[] {
    if (description.length < 1) return [];

    const lines: string[] = description.split("\n");

    return lines;
}
