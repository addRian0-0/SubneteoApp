import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { calcularRedes } from "./logic/subneteo";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Home() {

  return (
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
        <title>Programa de subneteo</title>
      </Head>

      <Typography color="secondary" className="m-4" variant="h3" component="h2">
        Programas de subneteo
      </Typography>

      <div className="w-90 m-4 d-flex justify-content-center">
        <Card className={styles.cardMin} variant="outlined" >
          <CardContent>
            <Typography color="secondary" variant="h4" component="h2">
              ¿Cuantas redes requieres?
            </Typography>
            <Typography variant="body2" variant="p">
              Para este subneteo se require la direccion IP y el numero de redes solicitadas.
              Obtendras el tipo de clase de red, el numero de hosts por subred, la mascara en binario y en decimal.
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/subneteo1">
              <Button size="medium" variant="outlined" color="secondary">Ir a la pagina</Button>
            </Link>
          </CardActions>
        </Card>

      </div>

      <div className="w-90 m-4 d-flex justify-content-center">
        <Card className={styles.cardMin} variant="outlined" >
          <CardContent>
            <Typography color="secondary" variant="h4" component="h2">
              Repositorio de Git
            </Typography>
            <Typography variant="body2" variant="p" >
              Repositorio en Git abierto 
            </Typography>
            <Typography color="secondary" variant="body2" variant="p" >
              - by addRian0-0
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="https://github.com/addRian0-0/Subneteo-Next">
              <Button variant="outlined" color="secondary" startIcon={<GitHubIcon />} >
                https://github.com/addRian0-0/Subneteo-Next
              </Button>
            </Link>
          </CardActions>
        </Card>

      </div>

    </div>
  )
}
