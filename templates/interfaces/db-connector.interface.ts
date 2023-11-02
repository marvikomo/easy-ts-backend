/**
 * @interface IDatabaseConnector
 */
interface IDatabaseConnector {
    connect(url: string): void;
    disconnect(): void;
}
export default IDatabaseConnector;
