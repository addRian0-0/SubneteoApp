import Head from 'next/head';
import { useState } from 'react';
import { calcularRedes } from "./logic/subneteo";
import Appbar from "../components/appbar";
import Typography from '@material-ui/core/Typography';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Button } from '@material-ui/core';

export default function Home() {

    const [redes, setRedes] = useState(0);
    const [oct1, setOct1] = useState(0);
    const [clase, setClase] = useState('');
    const [rangoRed, setRangoRed] = useState(0);
    const [numHosts, setnumHosts] = useState(0);

    //Octatetos de bits
    const [octb1, setOctb1] = useState('11111111');
    const [octb2, setOctb2] = useState('00000000');
    const [octb3, setOctb3] = useState('00000000');
    const [octb4, setOctb4] = useState('00000000');

    //Octatetos decimales
    const [octd1, setOctd1] = useState('255')
    const [octd2, setOctd2] = useState('255')
    const [octd3, setOctd3] = useState('255')
    const [octd4, setOctd4] = useState('255')

    const sacarRedes = () => {
        event.preventDefault();
        const { wclase, n, binText, bitTotales, salto, hosts } = calcularRedes(redes, oct1);
        setClase(wclase);
        setRangoRed(salto);
        setnumHosts(hosts);
        const txtBit = bitTotales.toString();
        switch (wclase) {
            case "A":
                //Modificar todos los octetos binarios
                setOctb2(binText);
                setOctb3("00000000");
                setOctb4("00000000");
                //Modifcar octetos decimales
                setOctd2(txtBit);
                setOctd3("0");
                setOctd4("0");
                break;
            case "B":
                //Modificar todos los octetos binarios
                setOctb2("11111111");
                setOctb3(binText);
                setOctb4("00000000");
                //Modifcar octetos decimales
                setOctd2("255");
                setOctd3(txtBit);
                setOctd4("0");
                break;
            case "C":
                //Modificar todos los octetos binarios
                setOctb2("11111111");
                setOctb3("11111111");
                setOctb4(binText);
                //Modifcar octetos decimales
                setOctd2("255");
                setOctd3("255");
                setOctd4(txtBit);
                break;
        }
    }

    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
                <title>Programa de subneteo</title>
            </Head>

            <Appbar title="Subneteo por clases" />

            <form className="m-4 container" onSubmit={sacarRedes} >

                <div className="row align-items-star">
                    <Typography color="primary" variant="h4" component="h2">
                        Direccion IP
                    </Typography>
                    <div className="col input-group input-group-sm mb-3">
                        <input type="number" value={oct1} onChange={e => setOct1(e.target.value)} className="form-control" />
                    </div>
                    .
                    <div className="col input-group input-group-sm mb-3">
                        <input type="number" className="form-control" />
                    </div>
                    .
                    <div className="col input-group input-group-sm mb-3">
                        <input type="number" className="form-control" />
                    </div>
                    .
                    <div className="col input-group input-group-sm mb-3">
                        <input type="number" className="form-control" />
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Numero de redes solicitados</span>
                        <input id="btnRedes" type="number" className="form-control" value={redes} onChange={e => setRedes(e.target.value)} />
                    </div>
                </div>
                <Button type="submit" variant="contained" color="primary" >
                    Resolver redes solicitadas
                </Button>
            </form>

            <div className="m-5">
                <Typography color="primary" variant="h4" component="h2">
                    Red clase: {clase}
                </Typography>
                <Typography color="primary" variant="h4" component="h2">
                    Rango entre subredes: {rangoRed}
                </Typography>
                <Typography color="primary" variant="h4" component="h2">
                    Numero de hosts por subred: {numHosts}
                </Typography>
                <br/>
                <Typography color="primary" variant="h4" component="h2">
                    Mascara binario
                </Typography>
                <table className="table table-primary table-bordered border-primary justify-content-center">
                    <thead>
                        <tr>
                            <th> Primer Octeto</th>
                            <th> Segundo Octeto</th>
                            <th> Tercer Octeto</th>
                            <th> Cuarto Octeto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{octb1}</th>
                            <th scope="row">{octb2}</th>
                            <th scope="row">{octb3}</th>
                            <th scope="row">{octb4}</th>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <Typography color="primary" variant="h4" component="h2">
                    Mascara decimal
                </Typography>
                <table className="table table-primary table-bordered border-primary justify-content-center">
                    <thead>
                        <tr>
                            <th> Primer Octeto</th>
                            <th> Segundo Octeto</th>
                            <th> Tercer Octeto</th>
                            <th> Cuarto Octeto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> {octd1} </th>
                            <th scope="row"> {octd2} </th>
                            <th scope="row"> {octd3} </th>
                            <th scope="row"> {octd4} </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div >
    )
}
