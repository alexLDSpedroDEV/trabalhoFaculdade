export interface MeuFood {
    id: number,
    name: string,
    value: number,
    text: string,
    image: string,
    type: string,
}


export class Foods {
    private readonly foods: MeuFood[] = [] ; 

    //adicionar nova comidas
    addNewFoods(foods: MeuFood): void {
        this.foods.push(foods);
    }

    public getAllFoods(): MeuFood[] {
        return this.foods;
    }
    
}

export const CarrinhoProdutos = new Foods();

export const dados: MeuFood[] = CarrinhoProdutos.getAllFoods();
