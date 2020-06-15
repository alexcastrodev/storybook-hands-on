import CardBox from './../src/components/CardBox';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'CardBox',
    component: CardBox,
    decorators: [withKnobs]

  };

  
export const CardBoxComponent = () => ({
    components: {CardBox},
    template: "<card-box :msg='msg'/>",
    props: {
        msg: {
          default: text('text','Hello World')
        },
    }
})