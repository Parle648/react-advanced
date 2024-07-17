export default interface IButton {
    title: string, 
    dataTextId: string, 
    type: 'button' | 'reset' | 'submit',
    onClick?: () => void
}