var socket= io()
var vm = new Vue({

  el: '#vue',
  data: {

    orders: {},
    order: {x: 0, y: 0},
    item: food,
    isHidden: false,
    checkedBurgers: [],
    customerInfo: [],

  },
  methods: {

    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    addOrder: function () {
      var index = this.getNext();
      this.orders[index] = this.order;
      socket.emit("addOrder", {orderId: index,
        details: {x: this.orders[index].x,
          y: this.orders[index].y},
          orderItems: this.orders[index].orderItems,
          customerInfo: this.customerInfo})

        },

      displayOrder: function(event){
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top};

          this.order ={
            x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y,
            orderItems: this.checkedBurgers};


          }

        }


        })
