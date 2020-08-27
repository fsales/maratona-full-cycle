package com.maratona.demo.resource

import org.springframework.http.RequestEntity
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class MaratonaFullCycle {

    @GetMapping
    fun index(): ResponseEntity<Resposta>{
        return ResponseEntity.ok(Resposta("Eu sou Full Cycle"))
    }
}

data class Resposta(var mensagem: String)