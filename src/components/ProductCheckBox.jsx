function ProductCheckBox(){
    return (
        <>
        <div className=" pl-6 ml-20 mr-10  bg-white w-72 h-full rounded"> {/* Div Principal engloba tudo */}
         <div className="justify-items-start" > {/* Div que engloba todos os elementos */}

            <div className=" border-b border-black"> {/* Div do nome "Filtrar por" */}
                Filtrar por
            </div>
           
            <div className="">  {/* Div da categoria "Marka" */}
                Marka
                <div className="flex"> 
                    <input type="checkbox" id="adiddas" name="adiddas" className="accent-[#C92071] "/>
                    <label for="adiddas"> Adiddas</label>
                </div>
                <div className="flex"> 
                    <input  type="checkbox" id="calenciaga" name="calenciaga" className="accent-[#C92071]"/>
                    <label for="calenciaga"> Calenciaga</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="k-swiss" name="k-swiss" className="accent-[#C92071]"/>
                    <label for="k-swiss"> K-swiss</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="nike" name="nike" className="accent-[#C92071]"/>
                    <label for="nike"> Nike</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="puma" name="puma" className="accent-[#C92071]"/>
                    <label for="puma"> Puma</label>
                </div>
            </div>

            <div> {/* Div da categoria "Categoria" */}
                Categoria
                <div className="flex"> 
                    <input type="checkbox" id="esporte-e-lazer" name="esporte-e-lazer" className="accent-[#C92071]"/>
                    <label for="esporte-e-lazer"> Esporte e lazer</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="casual" name="casual" className="accent-[#C92071]"/>
                    <label for="casual"> Casual</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="utilitario" name="utilitario" className="accent-[#C92071]"/>
                    <label for="utilitario"> Utilitário</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="corrida" name="corrida" className="accent-[#C92071]"/>
                    <label for="corrida"> Corrida</label>
                </div>
            </div>

            <div> {/* Div da categoria "Gênero" */}
                Gênero
                <div className="flex"> 
                    <input type="checkbox" id="masculino" name="masculino" className="accent-[#C92071]"/>
                    <label for="masculino"> Masculino</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="feminino" name="feminino" className="accent-[#C92071]"/>
                    <label for="feminino"> Feminino</label>
                </div>
                <div className="flex"> 
                    <input type="checkbox" id="unisex" name="unisex" className="accent-[#C92071]"/>
                    <label for="unisex"> Unisex</label>
                </div>
            </div>

            <div> {/* Div da categoria "Estado" */}
                Estado
                <div>
                    <input type="radio" id="novo" name="estado" value="novo" className="accent-[#C92071]"/>
                    <label for="novo">Novo</label>
                </div>
                <div>
                    <input type="radio" id="usado" name="estado" value="usado" className="accent-[#C92071]"/>
                    <label for="usado">Usado</label>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default ProductCheckBox;