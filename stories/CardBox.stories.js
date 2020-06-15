import CardBox from './../src/components/CardBox';

export default {
    title: 'CardBox',
    component: CardBox,
  };

  
export const CardBoxComponent = () => ({
    components: {CardBox},
    template: "<card-box msg='Hello World'/>",
    props: {
        msg: {
          default: String('Hello World')
        },
    }
})