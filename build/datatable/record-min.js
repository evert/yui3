YUI.add("record",function(B){function A(C){A.superclass.constructor.apply(this,arguments);}A.NAME="record";A.ATTRS={id:{valueFn:"_setId",writeOnce:true},data:{}};B.extend(A,B.Base,{_setId:function(){return B.guid();},initializer:function(){},destructor:function(){},getValue:function(C){return this.get("data")[C];}});B.Record=A;},"@VERSION@",{requires:["base"]});