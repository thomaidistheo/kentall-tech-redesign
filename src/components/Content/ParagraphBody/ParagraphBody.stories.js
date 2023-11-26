import ParagraphBody from '../ParagraphBody/ParagraphBody'

export default {
    title: "Paragraph Body",
    component: ParagraphBody,
}

const Template = args => <ParagraphBody {...args} />

export const Default = Template.bind({})
Default.args = {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    maxWidth: 1460
}