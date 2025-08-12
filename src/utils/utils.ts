export const getContext = (canvas: HTMLCanvasElement): CanvasRenderingContext2D | null =>
{
    return canvas.getContext('2d');
}
