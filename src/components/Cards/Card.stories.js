import Card from '../Cards/Card'

export default {
    title: "Card",
    component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
    title:"Card Component",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    buttonLink:"#",
    buttonText:"CTA Link",
    image:"https://redesign.kentall-tech.com/static/media/moto-card.3830f4f816ed4c1d2b99.png",
}