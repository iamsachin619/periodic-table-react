import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./styles.css";
import { Modal, Loader } from "rsuite";

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const handleOpen = (e) => {
    let num = e.target.innerHTML.split("<");

    let atomicNumber = Number(num[0]);
    console.log(atomicNumber);
    //fetching data
    fetch(
      `https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${atomicNumber}`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData(null);
  };
  //document.getElementsByClassName("element")[55].onClick = handleOpen;
  return (
    <div className="App">
      <table>
        <tr>
          <td colspan="19">
            <h3 class="headingOne">The Periodic Table</h3>
          </td>
        </tr>
        <tr>
          <td class="element _color_1 text_color_green" onClick={handleOpen}>
            1<br />H
          </td>
          <td class="noBorder" colspan="17"></td>
          <td class="element color_9 text_color_green" onClick={handleOpen}>
            2<br />
            He
          </td>
        </tr>
        <tr>
          <td class="element color_2" onClick={handleOpen}>
            3<br />
            Li
          </td>
          <td class="element color_3" onClick={handleOpen}>
            4<br />
            Be
          </td>
          <td class="noBorder" colspan="11"></td>
          <td class="element color_6" onClick={handleOpen}>
            5<br />
            Be
          </td>
          <td class="element _color_1" onClick={handleOpen}>
            6<br />C
          </td>
          <td class="element _color_1 text_color_green" onClick={handleOpen}>
            7<br />N
          </td>
          <td class="element _color_1 text_color_green" onClick={handleOpen}>
            8<br />O
          </td>
          <td class="element color_8 text_color_green" onClick={handleOpen}>
            9<br />F
          </td>
          <td class="element color_9 text_color_green" onClick={handleOpen}>
            10
            <br />
            Ne
          </td>
        </tr>
        <tr>
          <td class="element color_2" onClick={handleOpen}>
            11
            <br />
            Na
          </td>
          <td class="element color_3" onClick={handleOpen}>
            12
            <br />
            Mg
          </td>
          <td class="noBorder" colspan="11"></td>
          <td class="element color_7" onClick={handleOpen}>
            13
            <br />
            Al
          </td>
          <td class="element color_6" onClick={handleOpen}>
            14
            <br />
            Si
          </td>
          <td class="element _color_1" onClick={handleOpen}>
            15
            <br />P
          </td>
          <td class="element _color_1" onClick={handleOpen}>
            16
            <br />S
          </td>
          <td class="element color_8 text_color_green" onClick={handleOpen}>
            17
            <br />
            Cl
          </td>
          <td class="element color_9 text_color_green" onClick={handleOpen}>
            18
            <br />
            Ar
          </td>
        </tr>
        <tr>
          <td class="element color_2" onClick={handleOpen}>
            19
            <br />K
          </td>
          <td class="element color_3" onClick={handleOpen}>
            20
            <br />
            Ca
          </td>
          <td class="element color_5" colspan="2" onClick={handleOpen}>
            21
            <br />
            Sc
          </td>
          <td class="element color_5" onClick={handleOpen}>
            22
            <br />
            Ti
          </td>
          <td class="element color_5" onClick={handleOpen}>
            23
            <br />V
          </td>
          <td class="element color_5" onClick={handleOpen}>
            24
            <br />
            Cr
          </td>
          <td class="element color_5" onClick={handleOpen}>
            25
            <br />
            Mn
          </td>
          <td class="element color_5" onClick={handleOpen}>
            26
            <br />
            Fe
          </td>
          <td class="element color_5" onClick={handleOpen}>
            27
            <br />
            Co
          </td>
          <td class="element color_5" onClick={handleOpen}>
            28
            <br />
            Ni
          </td>
          <td class="element color_5" onClick={handleOpen}>
            29
            <br />
            Cu
          </td>
          <td class="element color_5" onClick={handleOpen}>
            30
            <br />
            Zn
          </td>
          <td class="element color_7 text_color_blue" onClick={handleOpen}>
            31
            <br />
            Ga
          </td>
          <td class="element color_6" onClick={handleOpen}>
            32
            <br />
            Ge
          </td>
          <td class="element color_6" onClick={handleOpen}>
            33
            <br />
            As
          </td>
          <td class="element _color_1" onClick={handleOpen}>
            34
            <br />
            Se
          </td>
          <td class="element color_8 text_color_blue" onClick={handleOpen}>
            35
            <br />
            Br
          </td>
          <td class="element color_9 text_color_green" onClick={handleOpen}>
            36
            <br />
            Kr
          </td>
        </tr>
        <tr>
          <td class="element color_2" onClick={handleOpen}>
            37
            <br />
            Rb
          </td>
          <td class="element color_3" onClick={handleOpen}>
            38
            <br />
            Sr
          </td>
          <td class="element color_5" colspan="2" onClick={handleOpen}>
            39
            <br />Y
          </td>
          <td class="element color_5" onClick={handleOpen}>
            40
            <br />
            Zr
          </td>
          <td class="element color_5" onClick={handleOpen}>
            41
            <br />
            Nb
          </td>
          <td class="element color_5" onClick={handleOpen}>
            42
            <br />
            Mo
          </td>
          <td class="element color_5" onClick={handleOpen}>
            43
            <br />
            Tc
          </td>
          <td class="element color_5" onClick={handleOpen}>
            44
            <br />
            Ru
          </td>
          <td class="element color_5" onClick={handleOpen}>
            45
            <br />
            Rh
          </td>
          <td class="element color_5" onClick={handleOpen}>
            46
            <br />
            Pd
          </td>
          <td class="element color_5" onClick={handleOpen}>
            47
            <br />
            Ag
          </td>
          <td class="element color_5" onClick={handleOpen}>
            48
            <br />
            Cd
          </td>
          <td class="element color_7" onClick={handleOpen}>
            49
            <br />
            In
          </td>
          <td class="element color_7" onClick={handleOpen}>
            50
            <br />
            Sn
          </td>
          <td class="element color_6" onClick={handleOpen}>
            51
            <br />
            Sb
          </td>
          <td class="element color_6" onClick={handleOpen}>
            52
            <br />
            Te
          </td>
          <td class="element color_8" onClick={handleOpen}>
            53
            <br />I
          </td>
          <td class="element color_9 text_color_green" onClick={handleOpen}>
            54
            <br />
            Xe
          </td>
        </tr>
        <tr>
          <td class="element color_2 text_color_blue" onClick={handleOpen}>
            55
            <br />
            Cs
          </td>
          <td class="element color_3" onClick={handleOpen}>
            56
            <br />
            Ba
          </td>
          <td class="element color_4" colspan="2">
            57-71
            <br />
            &nbsp;
          </td>
          <td class="element color_5" onClick={handleOpen}>
            72
            <br />
            Hf
          </td>
          <td class="element color_5" onClick={handleOpen}>
            73
            <br />
            Ta
          </td>
          <td class="element color_5" onClick={handleOpen}>
            74
            <br />W
          </td>
          <td class="element color_5" onClick={handleOpen}>
            75
            <br />
            Re
          </td>
          <td class="element color_5" onClick={handleOpen}>
            76
            <br />
            Os
          </td>
          <td class="element color_5" onClick={handleOpen}>
            77
            <br />
            Ir
          </td>
          <td class="element color_5" onClick={handleOpen}>
            78
            <br />
            Pt
          </td>
          <td class="element color_5" onClick={handleOpen}>
            79
            <br />
            Au
          </td>
          <td class="element color_5 text_color_blue" onClick={handleOpen}>
            80
            <br />
            Hg
          </td>
          <td class="element color_7" onClick={handleOpen}>
            81
            <br />
            Tl
          </td>
          <td class="element color_7" onClick={handleOpen}>
            82
            <br />
            Pb
          </td>
          <td class="element color_7" onClick={handleOpen}>
            83
            <br />
            Bi
          </td>
          <td class="element color_6" onClick={handleOpen}>
            84
            <br />
            Po
          </td>
          <td class="element color_8" onClick={handleOpen}>
            85
            <br />
            At
          </td>
          <td class="element color_9 text_color_green" onClick={handleOpen}>
            86
            <br />
            Rn
          </td>
        </tr>
        <tr>
          <td class="element color_2 text_color_blue" onClick={handleOpen}>
            87
            <br />
            Fr
          </td>
          <td class="element color_3" onClick={handleOpen}>
            88
            <br />
            Ra
          </td>
          <td class="element color_4" colspan="2">
            89-103
            <br />
            &nbsp;
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            104
            <br />
            Rf
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            105
            <br />
            Db
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            106
            <br />
            Sg
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            107
            <br />
            Bh
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            108
            <br />
            Hs
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            109
            <br />
            Mt
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            110
            <br />
            Ds
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            111
            <br />
            Rg
          </td>
          <td class="element color_5 text_color_red" onClick={handleOpen}>
            112
            <br />
            Cn
          </td>
          <td class="element text_color_red" onClick={handleOpen}>
            113
            <br />
            Nh
          </td>
          <td class="element text_color_red" onClick={handleOpen}>
            114
            <br />
            Fl
          </td>
          <td class="element text_color_red" onClick={handleOpen}>
            115
            <br />
            Mc
          </td>
          <td class="element text_color_red" onClick={handleOpen}>
            116
            <br />
            Lv
          </td>
          <td class="element text_color_red" onClick={handleOpen}>
            117
            <br />
            Ts
          </td>
          <td class="element text_color_red" onClick={handleOpen}>
            118
            <br />
            Og
          </td>
        </tr>

        <tr>
          <td class="noBorder" colspan="2" rowspan="2"></td>
          <td class="element color_4" onClick={handleOpen}>
            57
            <br />
            La
          </td>
          <td class="element color_4" onClick={handleOpen}>
            58
            <br />
            Ce
          </td>
          <td class="element color_4" onClick={handleOpen}>
            59
            <br />
            Pr
          </td>
          <td class="element color_4" onClick={handleOpen}>
            60
            <br />
            Nd
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            61
            <br />
            Pm
          </td>
          <td class="element color_4" onClick={handleOpen}>
            62
            <br />
            Sm
          </td>
          <td class="element color_4" onClick={handleOpen}>
            63
            <br />
            Eu
          </td>
          <td class="element color_4" onClick={handleOpen}>
            64
            <br />
            Gd
          </td>
          <td class="element color_4" onClick={handleOpen}>
            65
            <br />
            Tb
          </td>
          <td class="element color_4" onClick={handleOpen}>
            66
            <br />
            Dy
          </td>
          <td class="element color_4" onClick={handleOpen}>
            67
            <br />
            Ho
          </td>
          <td class="element color_4" onClick={handleOpen}>
            68
            <br />
            Er
          </td>
          <td class="element color_4" onClick={handleOpen}>
            69
            <br />
            Tm
          </td>
          <td class="element color_4" onClick={handleOpen}>
            70
            <br />
            Yb
          </td>
          <td class="element color_4" onClick={handleOpen}>
            71
            <br />
            Lu
          </td>
          <td class="noBorder" colspan="1" rowspan="1"></td>
        </tr>
        <tr>
          <td class="element color_4" onClick={handleOpen}>
            89
            <br />
            Ac
          </td>
          <td class="element color_4" onClick={handleOpen}>
            90
            <br />
            Th
          </td>
          <td class="element color_4" onClick={handleOpen}>
            91
            <br />
            Pa
          </td>
          <td class="element color_4" onClick={handleOpen}>
            92
            <br />U
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            93
            <br />
            Np
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            94
            <br />
            Pu
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            95
            <br />
            Am
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            96
            <br />
            Cm
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            97
            <br />
            Bk
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            98
            <br />
            Cf
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            99
            <br />
            Es
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            100
            <br />
            Fm
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            101
            <br />
            Md
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            102
            <br />
            No
          </td>
          <td class="element color_4 text_color_red" onClick={handleOpen}>
            103
            <br />
            Lr
          </td>
        </tr>
      </table>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Element Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {data === null ? (
              <Loader content="loading" />
            ) : (
              <div>
                Name : {data.name}
                <br />
                symbol : {data.symbol}
                <br />
                electronicConfiguration : {data.electronicConfiguration}
                <br />
                Atomic Mass : {data.atomicMass}
                <br />
                Atomic Number : {data.atomicNumber}
                <br />
                standardState : {data.standardState}
                <br />
                atomicRadius : {data.atomicRadius}
                <br />
                BondingType : {data.bondingType}
                <br />
                density : {data.density}
                <br />
                electronAffinity : {data.electronAffinity}
                <br />
                electronegativity : {data.electronegativity}
                <br />
                electronicConfiguration : {data.electronicConfiguration}
                <br />
                groupBlock : {data.groupBlock}
                <br />
                ionRadius : {data.ionRadius}
                <br />
                meltingPoint : {data.meltingPoint}
                <br />
                standardState : {data.standardState}
                <br />
                oxidationStates : {data.oxidationStates}
                <br />
                vanDelWaalsRadius : {data.vanDelWaalsRadius}
                <br />
                yearDiscovered : {data.yearDiscovered}
                <br />
              </div>
            )}
            {/* atomicMass: "6.941(2)" atomicNumber: 3 atomicRadius: 134
            boilingPoin.logt: 1615 bondingType: "metallic" cpkHexColor: "CC80FF"
            density: 0.535 electronAffinity: -60 electronegativity: 0.98
            electronicConfiguration: "[He] 2s1" groupBlock: "alkali metal"
            ionRadius: "76 (+1)" ionizationEnergy: 520 meltingPoint: 454 name:
            "Lithium" oxidationStates: 1 standardState: "solid" symbol: "Li"
            vanDelWaalsRadius: 182 yearDiscovered: 1817 */}
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
