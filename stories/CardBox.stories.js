import CardBox from './../src/components/CardBox';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'CardBox',
    component: CardBox,
    decorators: [withKnobs]

  };

  
export const CardBoxRed = () => ({
    components: {CardBox},
    template: "<card-box style='color: red' :msg='msg'/>",
    props: {
        msg: {
          default: text('text','Hello World')
        },
    }
})

export const CardBoxBlue = () => ({
    components: {CardBox},
    template: "<card-box style='color: blue' :msg='msg'/>",
    props: {
        msg: {
          default: text('text','Hello World')
        },
    }
})